const fs = require('fs');
const file = '1-json.json'

const data = JSON.parse(fs.readFileSync(file).toString());
console.log('original data: ', data);

data.name = 'Oleh';
data.age = 43;
console.log('edited data: ', data);

fs.writeFileSync(file, JSON.stringify(data));