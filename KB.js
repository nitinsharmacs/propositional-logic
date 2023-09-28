class KB {
  constructor(existingKnowledge = new Set()) {
    this.knowledge = existingKnowledge;
  }

  add(information) {
    this.knowledge.add(information);
  }

  toString() {
    return `[\n${[...this.knowledge.values()]
      .map((_) => _.toString())
      .join(',\n')}\n]`;
  }
}

module.exports = KB;
