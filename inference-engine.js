const KB = require('./KB.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['Rain and Wet', 'Rain or Wet', 'not Rain', 'not Wet'];
  const kb = new KB();
  propositions.forEach((p) => kb.add(parse(p)));
  console.log(kb.toString());
};

main();
