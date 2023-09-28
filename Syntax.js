class Symbol {
  constructor(semantic) {
    this.semantic = semantic;
  }

  toString() {
    return this.semantic;
  }
}

class LogicalSentence {
  toString() {}
}

class UnaryLogicalSentence extends LogicalSentence {
  constructor(connective, sym1) {
    super();
    this.connective = connective;
    this.sym1 = sym1;
  }

  toString() {
    return `(${this.connective} ${this.sym1})`;
  }
}

class BiLogicalSentence extends LogicalSentence {
  constructor(sym1, connective, sym2) {
    super();
    this.sym1 = sym1;
    this.connective = connective;
    this.sym2 = sym2;
  }

  toString() {
    return `(${this.sym1} ${this.connective} ${this.sym2})`;
  }
}

module.exports = {
  LogicalSentence,
  BiLogicalSentence,
  UnaryLogicalSentence,
  Symbol,
};
