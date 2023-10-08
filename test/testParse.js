const assert = require('assert');
const parse = require('../src/parse');
const { LogicalSentence, Symbol, Implies, Not } = require('../src/syntax');

describe('parse', () => {
  it('should parse a single sentence', () => {
    const sentence = 'Rain';

    const expected = new LogicalSentence([new Symbol('rain')]);

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a sentence with bi connective', () => {
    const sentence = 'Rain implies Wet';

    const expected = new LogicalSentence(
      [new Symbol('rain'), new Symbol('wet')],
      new Implies()
    );

    const actual = parse(sentence);
    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a sentence with unary connective', () => {
    const sentence = 'not Rain';

    const expected = new LogicalSentence([new Symbol('rain')], new Not());

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a compound sentence', () => {
    const sentence = 'not Rain implies Wet';

    const expected = new LogicalSentence(
      [new LogicalSentence([new Symbol('rain')], new Not()), new Symbol('wet')],
      new Implies()
    );

    const actual = parse(sentence);
    assert.deepStrictEqual(actual, expected);
  });
});
