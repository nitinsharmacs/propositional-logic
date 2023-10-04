const { LogicalSentence } = require('./Syntax');

class SentenceBuilder {
  constructor() {
    this.subsentences = [];
  }

  add(sentence) {
    this.subsentences.push(sentence);
  }

  combine(connective) {
    this.subsentences = [new LogicalSentence(this.subsentences, connective)];
  }

  finish() {
    return this.subsentences[0];
  }

  static builder() {
    return new SentenceBuilder();
  }
}
exports.SentenceBuilder = SentenceBuilder;
