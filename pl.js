const KB = require('./src/KB.js');
const Engine = require('./src/Engine.js');
const parse = require('./src/parse.js');

const main = () => {
  const propositions = ['Rain implies Wet', 'not Wet'];

  const kb = new KB();
  propositions.forEach((p) => kb.add(parse(p)));
  console.log('================================');
  console.log(kb.toString());
  console.log('================================');

  console.log(Engine.queryOn('not Rain?', kb));
  console.log('================================');
  console.log(kb.toString());
  console.log('================================');
};

main();
