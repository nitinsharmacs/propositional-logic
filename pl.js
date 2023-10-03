const KB = require('./KB.js');
const Engine = require('./engine.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['Rain implies Wet', 'Rain'];

  const kb = new KB();
  propositions.forEach((p) => kb.add(parse(p)));

  console.log('================================');
  console.log(kb.toString());
  console.log('================================');

  console.log(Engine.queryOn('Wet?', kb));
  console.log('================================');
  console.log(kb.toString());
  console.log('================================');
};

main();
