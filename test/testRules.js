const assert = require('assert');

const KB = require('../KB.js');
const Rules = require('../Rules.js');
const { LogicalSentence, Symbol, Implies, Not } = require('../Syntax.js');

describe('Rules', () => {
  describe('applyModusPonens', () => {
    it('should apply modus ponens on kb', () => {
      const kb = new KB();
      kb.add(
        new LogicalSentence(
          [new Symbol('Rain'), new Symbol('Wet')],
          new Implies()
        )
      );
      kb.add(new LogicalSentence([new Symbol('Rain')]));
      const goal = new LogicalSentence([new Symbol('Wet')]);

      Rules.applyModusPonensOn(kb, goal);

      assert.ok(kb.find(goal));
    });

    it('should apply modus ponens on kb with complex antecedant', () => {
      const kb = new KB();
      kb.add(
        new LogicalSentence(
          [
            new LogicalSentence([new Symbol('Rain')], new Not()),
            new Symbol('Wet'),
          ],
          new Implies()
        )
      );
      kb.add(new LogicalSentence([new Symbol('Rain')], new Not()));
      const goal = new LogicalSentence([new Symbol('Wet')]);

      Rules.applyModusPonensOn(kb, goal);

      assert.ok(kb.find(goal));
    });
  });
});
