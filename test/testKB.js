const assert = require('assert');
const KB = require('../KB');
const { LogicalSentence, Symbol, Implies } = require('../Syntax');

describe('KB', () => {
  it('should find a logical sentence', () => {
    const kb = new KB(
      new Set([
        new LogicalSentence(
          [new Symbol('Rain'), new Symbol('Wet')],
          new Implies()
        ),
        new LogicalSentence([new Symbol('Rain')]),
      ])
    );

    assert.ok(kb.find(new LogicalSentence([new Symbol('Rain')])));
  });

  it('should find a compound logical sentence', () => {
    const kb = new KB(
      new Set([
        new LogicalSentence(
          [new Symbol('Rain'), new Symbol('Wet')],
          new Implies()
        ),
        new LogicalSentence([new Symbol('Rain')]),
      ])
    );

    assert.ok(
      kb.find(
        new LogicalSentence(
          [new Symbol('Rain'), new Symbol('Wet')],
          new Implies()
        )
      )
    );
  });
});
