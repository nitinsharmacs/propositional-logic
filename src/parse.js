const { SentenceBuilder } = require('./SentenceBuilder.js');
const {
  LogicalSentence,
  Symbol,
  And,
  Implies,
  Or,
  Not,
} = require('./syntax.js');
const { Tokenizer } = require('./Tokenizer.js');

const buildSentence = (tokenizer, builder) => {
  const token = tokenizer.next();

  switch (token) {
    case 'not':
      return builder.add(
        new LogicalSentence([new Symbol(tokenizer.next())], new Not())
      );
    case 'and':
      builder.add(new Symbol(tokenizer.next()));
      builder.combine(new And());
      return;
    case 'implies':
      builder.add(parseCompoundSentence(tokenizer.rest(), true));
      builder.combine(new Implies());
      return;
    default:
      builder.add(new Symbol(token));
  }
};

const parseCompoundSentence = (sentence, revisit = false) => {
  const tokenizer = Tokenizer.build(sentence);
  const builder = SentenceBuilder.builder();

  if (tokenizer.counts() === 1 && !revisit) {
    return builder
      .add(new LogicalSentence([new Symbol(tokenizer.next())]))
      .finish();
  }

  while (tokenizer.hasNext()) {
    buildSentence(tokenizer, builder);
  }

  return builder.finish();
};

const sanitise = (sentence) => sentence.trim().toLowerCase();

const parse = (sentence) => parseCompoundSentence(sanitise(sentence));

module.exports = parse;
