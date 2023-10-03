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

const parseCompoundSentence = (sentence) => {
  const [word1, conj, word2] = sentence.split(' ');

  if (word1 === 'not') {
    return parseWithUnaryNotConnective(conj);
  }

  const symbol1 = new Symbol(word1);
  const symbol2 = new Symbol(word2);

  const connective = new connectives[conj](conj);

  return new LogicalSentence([symbol1, symbol2], connective);
};

const parseSingleWordSentence = (sentence) => {
  const symbol = new Symbol(sentence);

  return new LogicalSentence([symbol]);
};

const isCompoundSentence = (sentence) => sentence.includes(' ');

const parse = (sentence) =>
  isCompoundSentence(sentence)
    ? parseCompoundSentence(sentence)
    : parseSingleWordSentence(sentence);

module.exports = parse;
