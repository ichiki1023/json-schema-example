const Ajv = require('ajv');
const ajv = new Ajv();

const schema = require('./schema.json');

const data = {
  firstName: "John",
  lastName: "Doe",
  age: "21"
};

const valid = ajv.validate(schema, data);
if (!valid) {
  console.error(ajv.errors);
  return;
}

console.log('success!');
