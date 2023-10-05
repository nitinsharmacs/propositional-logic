class Tokenizer {
  static build(sentence) {
    return (() => {
      const words = sentence.split(' ');

      let index = 0;
      const next = () => {
        return words[index++];
      };

      const hasNext = () => index < words.length;

      const rest = () => {
        const restof = words.slice(index).join(' ');

        index = words.length;
        return restof;
      };

      const counts = () => words.length;

      return {
        next,
        hasNext,
        rest,
        counts,
      };
    })();
  }
}
exports.Tokenizer = Tokenizer;
