// query => Wet?

const { LogicalSentence } = require('./Syntax.js');
const parse = require('./translater.js');

class Engine {
  static queryOn(query, knowledgeBase) {
    if (Engine.isInValidQuery(query)) throw new Error('Invalid query');

    const logicalQuery = Engine.parse(query);

    Engine.applyModusPonensOn(knowledgeBase, logicalQuery);

    return knowledgeBase.contains(logicalQuery);
  }

  static isInValidQuery(query) {
    return query.includes(' ') || !query.endsWith('?');
  }

  static parse(query) {
    const [question] = query.split('?');
    return parse(question);
  }

  static applyModusPonensOn(knowledgeBase, goal) {
    const propositions = knowledgeBase.match(goal).filter((_) => {
      return _.type() === 'implies';
    });

    propositions.forEach((proposition) => {
      if (Engine.findAntecedant(knowledgeBase, proposition)) {
        knowledgeBase.add(proposition.sentences[1]);
      }
    });
  }

  static findAntecedant(knowledgeBase, proposition) {
    return knowledgeBase.find(proposition.sentences[0]);
  }
}

module.exports = Engine;
