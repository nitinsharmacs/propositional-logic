const KB = require('./KB.js');
const Engine = require('./engine.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['not Rain implies Wet', 'not Wet'];

  console.log(JSON.stringify(parse(propositions[0])));
  // const kb = new KB();
  // propositions.forEach((p) => kb.add(parse(p)));

  // console.log('================================');
  // console.log(kb.toString());
  // console.log('================================');

  // console.log(Engine.queryOn('not Rain?', kb));
  // console.log('================================');
  // console.log(kb.toString());
  // console.log('================================');
};

main();
