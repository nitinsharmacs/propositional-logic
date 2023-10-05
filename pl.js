const KB = require('./KB.js');
const Engine = require('./engine.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['not Rain', 'not Rain implies not Wet'];

  // propositions.forEach((proposition) =>
  //   console.log(parse(proposition).toString())
  // );

  const kb = new KB();
  propositions.forEach((p) => kb.add(parse(p)));

  console.log('================================');
  console.log(kb.toString());
  console.log('================================');

  console.log(Engine.queryOn('not Wet?', kb));
  console.log('================================');
  console.log(kb.toString());
  console.log('================================');
};

main();
