const { UnaryLogicalSentence, Not, LogicalSentence } = require('./Syntax');

class Rules {
  static applyModusPonensOn(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      if (Rules.#findAntecedant(knowledgeBase, proposition)) {
        const [, consequent] = proposition.sentences;

        if (consequent instanceof LogicalSentence) {
          return knowledgeBase.add(consequent);
        }

        knowledgeBase.add(new LogicalSentence([consequent]));
      }
    });
  }

  static #findAntecedant(knowledgeBase, proposition) {
    const [antecedant] = proposition.sentences;

    if (antecedant instanceof LogicalSentence) {
      return knowledgeBase.find(antecedant);
    }

    return knowledgeBase.find(new LogicalSentence([antecedant]));
  }

  static applyModusTollens(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      const [antecedant, consequent] = proposition.sentences;

      const consequentNegate = new LogicalSentence([consequent], new Not());

      if (knowledgeBase.find(consequentNegate)) {
        knowledgeBase.add(new LogicalSentence([antecedant], new Not()));
      }
    });
  }
}

module.exports = Rules;
