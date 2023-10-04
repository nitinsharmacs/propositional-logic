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
  constructor(sentences, connective) {
    this.sentences = sentences;
    this.connective = connective;
  }

  // match(logicalSentence) {
  //   return this.sym.equals(logicalSentence.sym);
  // }

  toString() {
    let openingBraces = '(';
    let closingBraces = ')';

    if (!this.connective) {
      openingBraces = '';
      closingBraces = '';
    }

    if (this.connective instanceof Not) {
      return `${openingBraces}${this.connective} ${this.sentences[0]}${closingBraces}`;
    }

    return (
      openingBraces +
      this.sentences.join(` ${this.connective} `) +
      closingBraces
    );
  }

  // type() {
  //   return '';
  // }

  // equals(logicalSentence) {
  //   return this.match(logicalSentence);
  // }
}

class Connective {
  constructor(type) {
    this.type = type;
  }

  equals(connective) {
    return this.type === connective?.type;
  }
}

class And extends Symbol {
  constructor() {
    super('and');
  }

  toString() {
    return '∧';
  }
}

class Implies extends Symbol {
  constructor() {
    super('implies');
  }

  toString() {
    return '→';
  }
}

class Or extends Symbol {
  constructor() {
    super('or');
  }

  toString() {
    return '∨';
  }
}

class Not extends Connective {
  constructor() {
    super('not');
  }

  toString() {
    return '¬';
  }
}

// class UnaryLogicalSentence extends LogicalSentence {
//   constructor(connective, atomicLogicalSentence) {
//     super();
//     this.connective = connective;
//     this.atomicLogicalSentence = atomicLogicalSentence;
//   }

//   match(logicalSentence) {
//     return this.atomicLogicalSentence.match(logicalSentence);
//   }

//   toString() {
//     return `(${this.connective} ${this.atomicLogicalSentence})`;
//   }

//   type() {
//     return this.connective.type;
//   }

//   equals(logicalSentence) {
//     return (
//       this.connective.equals(logicalSentence.connective) &&
//       this.atomicLogicalSentence.equals(logicalSentence)
//     );
//   }
// }

// class BiLogicalSentence extends LogicalSentence {
//   constructor(atomicLogicalSentence1, connective, atomicLogicalSentence2) {
//     super();
//     this.sentences = [atomicLogicalSentence1, atomicLogicalSentence2];
//     this.connective = connective;
//   }

//   match(logicalSentence) {
//     return this.sentences.some((sentence) => sentence.match(logicalSentence));
//   }

//   toString() {
//     return `(${this.sentences[0]} ${this.connective} ${this.sentences[1]})`;
//   }

//   type() {
//     return this.connective.type;
//   }

//   equals(logicalSentence) {
//     return (
//       this.connective.equals(logicalSentence.connective) &&
//       this.sentences.every((sentence) => sentence.equals(logicalSentence))
//     );
//   }
// }

module.exports = {
  LogicalSentence,
  Symbol,
  Not,
  Or,
  Implies,
  And,
};
