# json-schema-example
this repository is an [ajv](https://github.com/ajv-validator/ajv) example.  
ajv: The fastest JSON Schema validator for Node.js and browser. 

## How to use?
```
npm install
npm start
```

## output
```
$ npm start
> node ./index.js

[
  {
    keyword: 'type',
    dataPath: '.age',
    schemaPath: '#/properties/age/type',
    params: { type: 'integer' },
    message: 'should be integer'
  }
]
```
