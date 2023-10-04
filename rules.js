const { UnaryLogicalSentence, Not, LogicalSentence } = require('./Syntax');

class Rules {
  static applyModusPonensOn(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      if (Rules.#findAntecedant(knowledgeBase, proposition)) {
        knowledgeBase.add(new LogicalSentence([proposition.sentences[1]]));
      }
    });
  }

  static applyModusTollens(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      const consequentNegate = new UnaryLogicalSentence(
        new Not(),
        proposition.sentences[1]
      );

      if (knowledgeBase.find(consequentNegate)) {
        knowledgeBase.add(
          new UnaryLogicalSentence(new Not(), proposition.sentences[0])
        );
      }
    });
  }

  static #findAntecedant(knowledgeBase, proposition) {
    return knowledgeBase.find(new LogicalSentence([proposition.sentences[0]]));
  }
}

module.exports = Rules;
