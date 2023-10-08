const KB = require('./src/KB.js');
const Engine = require('./src/Engine.js');
const parse = require('./src/parse.js');
const Console = require('./src/Console.js');

const turn = async (kb) => {
  const statement = await Console.read();

  if (statement === '') {
    return;
  }

  if (Engine.isQuery(statement)) {
    Console.printResult(Engine.queryOn(statement, kb));
    return;
  }

  const proposition = parse(statement);

  if (kb.contains(proposition)) {
    return Console.printExistence();
  }

  kb.add(parse(statement));
  Console.printLearning();
};

const main = async () => {
  const kb = new KB();

  while (true) {
    await turn(kb);
  }
};

main();
