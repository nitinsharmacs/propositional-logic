const KB = require('./KB.js');
const Engine = require('./engine.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['not Rain implies not Wet', 'Rain implies not wet'];

  // console.log(JSON.stringify(parse(propositions[0])));
  // console.log(parse(propositions[0]).toString());

  propositions.forEach(proposition => console.log(parse(proposition).toString()))
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
