const KB = require('./KB.js');
const parse = require('./translater.js');

const main = () => {
  const propositions = ['Rain implies Wet', 'Rain'];
  const kb = new KB();
  propositions.forEach((p) => kb.add(parse(p)));
  console.log(kb.toString());
};

main();
