class Rules {
  static applyModusPonensOn(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      if (Rules.findAntecedant(knowledgeBase, proposition)) {
        knowledgeBase.add(proposition.sentences[1]);
      }
    });
  }

  static findAntecedant(knowledgeBase, proposition) {
    return knowledgeBase.find(proposition.sentences[0]);
  }
}

module.exports = Rules;
