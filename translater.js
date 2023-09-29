const { And, Implies, Or, Not } = require('./connectives.js');
const {
  LogicalSentence,
  UnaryLogicalSentence,
  BiLogicalSentence,
  Symbol,
} = require('./Syntax.js');

const connectives = {
  and: And,
  implies: Implies,
  or: Or,
  not: Not,
};

const parseWithUnaryNotConnective = (word) => {
  return new UnaryLogicalSentence(
    new Not(),
    new LogicalSentence(new Symbol(word))
  );
};

const parseCompoundSentence = (sentence) => {
  const [word1, conj, word2] = sentence.split(' ');

  if (word1 === 'not') {
    return parseWithUnaryNotConnective(conj);
  }

  const symbol1 = new Symbol(word1);
  const symbol2 = new Symbol(word2);

  const connective = new connectives[conj](conj);

  return new BiLogicalSentence(
    new LogicalSentence(symbol1),
    connective,
    new LogicalSentence(symbol2)
  );
};

const parseSingleWordSentence = (sentence) => {
  const symbol = new Symbol(sentence);

  return new LogicalSentence(symbol);
};

const isCompoundSentence = (sentence) => sentence.includes(' ');

const parse = (sentence) =>
  isCompoundSentence(sentence)
    ? parseCompoundSentence(sentence)
    : parseSingleWordSentence(sentence);

module.exports = parse;
