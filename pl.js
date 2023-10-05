const KB = require('./KB.js');
const Engine = require('./engine.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = [
    'Rain',
    'not Rain implies not Wet',
    'Rain implies not wet',
    'not Rain',
  ];

  propositions.forEach((proposition) =>
    console.log(parse(proposition).toString())
  );

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
