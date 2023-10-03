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
      // console.log(words.length);
      // console.log(index);
      const next = () => {
        return words[index++];
      }

      const hasNext = () => index < words.length;

      const rest = () => {
        const restof = words.slice(index).join(' ');
        console.log(restof);
        index = words.length;
        return restof;
      };
      return {
        next,
        hasNext,
        rest
      };
    })()
    // return function* () {
    //   const words = sentence.split(' ');
    //   let index = 0;
    //   while (index <= words.length) {
    //     yield words[index];
    //     index++;
    //   }
    // };
  }
}

const parseCompoundSentence = (sentence) => {
  const [word1, conj, word2] = sentence.split(' ');

  const tokenizer = Tokenizer.build(sentence);
  const builder = LogicalSentence.builder();
  // console.log(builder);
  // console.log(tokenizer.hasNext());
  while (tokenizer.hasNext()) {
    const token = tokenizer.next();
    // console.log(token);
    if (token === 'not') {
      builder.add(
        new LogicalSentence([new Symbol(tokenizer.next())], new Not())
      );
      continue;
    }

    if (token === 'and') {
      builder.add(new Symbol(tokenizer.next()));
      builder.combine(new And());
      continue;
    }

    if (token === 'implies') {
      builder.add(parseCompoundSentence(tokenizer.rest()));
      builder.combine(new Implies());
      continue;
    }

    builder.add(new Symbol(token));
  }

  return builder.finish();
  // if (word1 === 'not') {
  //   return parseWithUnaryNotConnective(conj);
  // }

  // const symbol1 = new Symbol(word1);
  // const symbol2 = new Symbol(word2);

  // const connective = new connectives[conj](conj);

  // return new LogicalSentence([symbol1, symbol2], connective);
};

const parseSingleWordSentence = (sentence) => {
  const symbol = new Symbol(sentence);

  return new LogicalSentence([symbol]);
};

const isCompoundSentence = (sentence) => sentence.includes(' ');

const parse = (sentence) => parseCompoundSentence(sentence);

module.exports = parse;
