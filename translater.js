const {
  LogicalSentence,
  Symbol,
  And,
  Implies,
  Or,
  Not,
} = require('./Syntax.js');

const connectives = {
  and: And,
  implies: Implies,
  or: Or,
  not: Not,
};

const parseWithUnaryNotConnective = (word) => {
  return new LogicalSentence([new Symbol(word)], new Not());
};

class Tokenizer {
  static build(sentence) {
    return (() => {
      const words = sentence.split(' ');

      let index = 0;
      const next = () => {
        return words[index++];
      };

      const hasNext = () => index < words.length;

      const rest = () => {
        const restof = words.slice(index).join(' ');

        index = words.length;
        return restof;
      };
      return {
        next,
        hasNext,
        rest,
      };
    })();
  }
}

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
      builder.add(new Symbol(token));
  }
};

const parseCompoundSentence = (sentence) => {
  const tokenizer = Tokenizer.build(sentence);
  const builder = LogicalSentence.builder();

  while (tokenizer.hasNext()) {
    buildSentence(tokenizer, builder);
  }

  return builder.finish();
};

const parse = (sentence) => parseCompoundSentence(sentence);

module.exports = parse;
