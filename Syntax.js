class Symbol {
  constructor(semantic) {
    this.semantic = semantic;
  }

  equals(symbol) {
    return this.semantic === symbol?.semantic;
  }

  toString() {
    return this.semantic;
  }
}

class LogicalSentence {
  constructor(sym) {
    this.sym = sym;
  }

  match(logicalSentence) {
    if (logicalSentence instanceof UnaryLogicalSentence) {
      return this.sym.equals(logicalSentence.atomicLogicalSentence.sym);
    }
    return this.sym.equals(logicalSentence.sym);
  }

  toString() {
    return `${this.sym}`;
  }

  type() {
    return '';
  }

  equals(logicalSentence) {
    return this.match(logicalSentence);
  }
}

class UnaryLogicalSentence extends LogicalSentence {
  constructor(connective, atomicLogicalSentence) {
    super();
    this.connective = connective;
    this.atomicLogicalSentence = atomicLogicalSentence;
  }

  match(logicalSentence) {
    return this.atomicLogicalSentence.match(logicalSentence);
  }

  toString() {
    return `(${this.connective} ${this.atomicLogicalSentence})`;
  }

  type() {
    return this.connective.type;
  }

  equals(logicalSentence) {
    return (
      this.connective.equals(logicalSentence.connective) &&
      this.atomicLogicalSentence.equals(logicalSentence)
    );
  }
}

class BiLogicalSentence extends LogicalSentence {
  constructor(atomicLogicalSentence1, connective, atomicLogicalSentence2) {
    super();
    this.sentences = [atomicLogicalSentence1, atomicLogicalSentence2];
    this.connective = connective;
  }

  match(logicalSentence) {
    return this.sentences.some((sentence) => sentence.match(logicalSentence));
  }

  toString() {
    return `(${this.sentences[0]} ${this.connective} ${this.sentences[1]})`;
  }

  type() {
    return this.connective.type;
  }

  equals(logicalSentence) {
    return (
      this.connective.equals(logicalSentence.connective) &&
      this.sentences.every((sentence) => sentence.equals(logicalSentence))
    );
  }
}

module.exports = {
  LogicalSentence,
  BiLogicalSentence,
  UnaryLogicalSentence,
  Symbol,
};
