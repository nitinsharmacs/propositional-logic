const Rules = require('./Rules.js');
const parse = require('./parse.js');

class Engine {
  static queryOn(query, knowledgeBase) {
    if (Engine.isInValidQuery(query)) throw new Error('Invalid query');

    const logicalQuery = Engine.parse(query);

    Rules.applyModusPonensOn(knowledgeBase, logicalQuery);
    Rules.applyModusTollens(knowledgeBase, logicalQuery);
    Rules.applyConjuction(knowledgeBase, logicalQuery);

    return knowledgeBase.contains(logicalQuery);
  }

  static isInValidQuery(query) {
    return !query.endsWith('?');
  }

  static parse(query) {
    const [question] = query.split('?');
    return parse(question);
  }
}

module.exports = Engine;
