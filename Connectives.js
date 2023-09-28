class And {
  constructor(semantic = 'and') {
    this.semantic = semantic;
  }

  toString() {
    return '∧';
  }
}

class Implies {
  constructor(semantic) {
    this.semantic = semantic;
  }

  toString() {
    return '→';
  }
}

class Or {
  constructor(semantic) {
    this.semantic = semantic;
  }

  toString() {
    return '∨';
  }
}

class Not {
  constructor(semantic) {
    this.semantic = semantic;
  }

  toString() {
    return '¬';
  }
}

module.exports = { And, Not, Or, Implies };
