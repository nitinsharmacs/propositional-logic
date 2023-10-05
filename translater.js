const { SentenceBuilder } = require('./SentenceBuilder.js');
const {
  LogicalSentence,
  Symbol,
  And,
  Implies,
  Or,
  Not,
} = require('./Syntax.js');
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
      builder.add(parseCompoundSentence(tokenizer.rest()));
      builder.combine(new Implies());
      return;
    default:
      builder.add(new LogicalSentence([new Symbol(token)]));
  }
};

const parseCompoundSentence = (sentence) => {
  const tokenizer = Tokenizer.build(sentence);
  const builder = SentenceBuilder.builder();

  while (tokenizer.hasNext()) {
    buildSentence(tokenizer, builder);
  }

  return builder.finish();
};

const parse = (sentence) => parseCompoundSentence(sentence);

module.exports = parse;
