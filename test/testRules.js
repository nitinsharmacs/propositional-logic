const assert = require('assert');

const KB = require('../src/KB.js');
const Rules = require('../src/rules.js');
const {
  LogicalSentence,
  Symbol,
  Implies,
  Not,
  And,
} = require('../src/Syntax.js');

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

    it('should apply modus ponens on kb with complex consequent', () => {
      const kb = new KB();

      kb.add(
        new LogicalSentence(
          [
            new Symbol('Rain'),
            new LogicalSentence([new Symbol('Wet')], new Not()),
          ],
          new Implies()
        )
      );

      kb.add(new LogicalSentence([new Symbol('Rain')]));

      const goal = new LogicalSentence([new Symbol('Wet')], new Not());

      Rules.applyModusPonensOn(kb, goal);

      assert.ok(kb.contains(goal));
    });
  });

  describe('applyModusTollens', () => {
    it('should add antecedent to kb', () => {
      const kb = new KB();
      kb.add(
        new LogicalSentence(
          [new Symbol('Rain'), new Symbol('Wet')],
          new Implies()
        )
      );
      kb.add(new LogicalSentence([new Symbol('Wet')], new Not()));

      const goal = new LogicalSentence([new Symbol('Rain')], new Not());

      Rules.applyModusTollens(kb, goal);

      assert.ok(kb.find(goal));
    });

    it('should add complex antecedent to kb', () => {
      const kb = new KB();
      kb.add(
        new LogicalSentence(
          [
            new LogicalSentence(
              [new Symbol('Rain'), new Symbol('Thunder')],
              new And()
            ),
            new Symbol('Wet'),
          ],
          new Implies()
        )
      );
      kb.add(new LogicalSentence([new Symbol('Wet')], new Not()));

      const goal = new LogicalSentence(
        [
          new LogicalSentence(
            [new Symbol('Rain'), new Symbol('Thunder')],
            new And()
          ),
        ],
        new Not()
      );

      Rules.applyModusTollens(kb, goal);

      assert.ok(kb.find(goal));
    });

    it('should add antecedent with complex consequent to kb', () => {
      const kb = new KB();
      kb.add(
        new LogicalSentence(
          [
            new Symbol('Rain'),
            new LogicalSentence([new Symbol('Wet')], new Not()),
          ],
          new Implies()
        )
      );
      kb.add(
        new LogicalSentence(
          [new LogicalSentence([new Symbol('Wet')], new Not())],
          new Not()
        )
      );

      const goal = new LogicalSentence([new Symbol('Rain')], new Not());

      Rules.applyModusTollens(kb, goal);

      assert.ok(kb.find(goal));
    });
  });
});
