class KB {
  constructor(existingKnowledge = new Set()) {
    this.knowledge = existingKnowledge;
  }

  add(information) {
    this.knowledge.add(information);
  }

  match(logicalSentence) {
    return [...this.knowledge.values()].filter((proposition) =>
      proposition.match(logicalSentence)
    );
  }

  find(logicalSentence) {
    return [...this.knowledge.values()].find((proposition) => {
      return proposition.equals(logicalSentence);
    });
  }

  contains(logicalSentence) {
    return this.find(logicalSentence) !== undefined;
  }

  toString() {
    return `[\n${[...this.knowledge.values()]
      .map((_) => _.toString())
      .join(',\n')}\n]`;
  }
}

module.exports = KB;
