class Console {
  static read() {
    process.stdout.write(Console.queryPrompt());

    return new Promise((res, rej) => {
      process.stdin.setEncoding('utf8');

      process.stdin.on('data', (chunk) => {
        res(chunk.trim());
        process.stdin.removeAllListeners();
      });

      process.stdin.on('error', rej);
    });
  }

  static printResult(succeed) {
    if (succeed) {
      return process.stdout.write(Console.successPrompt());
    }

    process.stdout.write(Console.failPrompt());
  }

  static printLearning() {
    process.stdout.write(Console.learningPrompt());
  }

  static printExistence() {
    process.stdout.write(Console.existencePrompt());
  }

  static queryPrompt() {
    return 'Ask or Tell me 😇.\n>> ';
  }

  static successPrompt() {
    return '--------> Yes 🤩.<--------\n\n';
  }

  static failPrompt() {
    return '--------> Nope 🥲, Please tell me more 😄.<--------\n\n';
  }

  static learningPrompt() {
    return '--------> I learned something new 😃. <--------\n\n';
  }

  static existencePrompt() {
    return '--------> I already knew it 😎. <--------\n\n';
  }
}

module.exports = Console;
