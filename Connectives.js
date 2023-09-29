class Connective {
  constructor(type) {
    this.type = type;
  }

  equals(connective) {
    return this.type === connective?.type;
  }
}

class And extends Connective {
  constructor(semantic = 'and') {
    super('and');
    this.semantic = semantic;
  }

  toString() {
    return '∧';
  }

  equals(connective) {
    return this.type === connective.type;
  }
}

class Implies extends Connective {
  constructor(semantic) {
    super('implies');
    this.semantic = semantic;
  }

  toString() {
    return '→';
  }
}

class Or extends Connective {
  constructor(semantic) {
    super('or');
    this.semantic = semantic;
  }

  toString() {
    return '∨';
  }
}

class Not extends Connective {
  constructor(semantic) {
    super('not');
    this.semantic = semantic;
  }

  toString() {
    return '¬';
  }
}

module.exports = { And, Not, Or, Implies };
