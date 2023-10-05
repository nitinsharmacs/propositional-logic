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
}

module.exports = Rules;
