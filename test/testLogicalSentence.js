const assert = require('assert');
const { LogicalSentence, Symbol, And, Not } = require('../Syntax');

describe('LogicalSentence', () => {
  it('should return bi connective sentence', () => {
    const sentence = new LogicalSentence(
      [new Symbol('Rain'), new Symbol('Wet')],
      new And()
    );

    const expected = '(Rain ∧ Wet)';

    const actual = sentence.toString();

    assert.equal(actual, expected);
  });

  it('should return unary connective sentence', () => {
    const sentence = new LogicalSentence([new Symbol('Rain')], new Not());

    const expected = '(¬ Rain)';

    const actual = sentence.toString();

    assert.equal(actual, expected);
  });
});
