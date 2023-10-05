const assert = require('assert');
const { LogicalSentence, Symbol, And, Not, Implies } = require('../src/Syntax');

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

  it('should match a single symbol logical sentence', () => {
    const sentence = new LogicalSentence([new Symbol('Rain')]);
    const matchingSentence = new LogicalSentence([new Symbol('Rain')]);

    assert.ok(sentence.match(matchingSentence));
  });

  it('should match a single symbol sentence to compound logical sentence', () => {
    const sentence = new LogicalSentence(
      [new Symbol('Wet'), new Symbol('Rain')],
      new Implies()
    );
    const matchingSentence = new LogicalSentence([new Symbol('Rain')]);

    assert.ok(sentence.match(matchingSentence));
  });

  it('should match a single symbol sentence to complex compound logical sentence', () => {
    const sentence = new LogicalSentence(
      [new Symbol('Wet'), new LogicalSentence([new Symbol('Rain')])],
      new Implies()
    );
    const matchingSentence = new LogicalSentence([new Symbol('Rain')]);

    assert.ok(sentence.match(matchingSentence));
  });

  it('should match a compound symbol sentence to compound logical sentence', () => {
    const sentence = new LogicalSentence(
      [new Symbol('Wet'), new Symbol('Rain')],
      new Implies()
    );
    const matchingSentence = new LogicalSentence(
      [new Symbol('Rain'), new Symbol('Wet')],
      new And()
    );

    assert.ok(sentence.match(matchingSentence));
  });

  it('should match a compound symbol sentence to compound logical sentence with not', () => {
    const sentence = new LogicalSentence(
      [new Symbol('Wet'), new Symbol('Rain')],
      new Implies()
    );
    const matchingSentence = new LogicalSentence(
      [new Symbol('Rain')],
      new Not()
    );

    assert.ok(sentence.match(matchingSentence));
  });
});
