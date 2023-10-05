// query => Wet?

const { LogicalSentence } = require('./Syntax.js');
const Rules = require('./rules.js');
const parse = require('./translater.js');

class Engine {
  static queryOn(query, knowledgeBase) {
    if (Engine.isInValidQuery(query)) throw new Error('Invalid query');

    const logicalQuery = Engine.parse(query);

    Rules.applyModusPonensOn(knowledgeBase, logicalQuery);
    Rules.applyModusTollens(knowledgeBase, logicalQuery);

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
