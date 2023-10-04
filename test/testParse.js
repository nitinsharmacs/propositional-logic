const assert = require('assert');
const parse = require('../translater');
const { LogicalSentence, Symbol, Implies, Not } = require('../Syntax');

describe('parse', () => {
  it('should parse a single sentence', () => {
    const sentence = 'Rain';

    const expected = new Symbol('Rain');

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a sentence with bi connective', () => {
    const sentence = 'Rain implies Wet';

    const expected = new LogicalSentence(
      [new Symbol('Rain'), new Symbol('Wet')],
      new Implies()
    );

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a sentence with unary connective', () => {
    const sentence = 'not Rain';

    const expected = new LogicalSentence([new Symbol('Rain')], new Not());

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });

  it('should parse a compound sentence', () => {
    const sentence = 'not Rain implies Wet';

    const expected = new LogicalSentence(
      [new LogicalSentence([new Symbol('Rain')], new Not()), new Symbol('Wet')],
      new Implies()
    );

    const actual = parse(sentence);

    assert.deepStrictEqual(actual, expected);
  });
});
