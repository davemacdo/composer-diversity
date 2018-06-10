// Node script to convert structure of composer-diversity-offline.json
// in preparation for moving to Firestore

const fs = require ('fs');

var input = JSON.parse(fs.readFileSync('./composer-diversity-offline.json', 'UTF-8'));
var values = input.values;

function parseName(combined){
  console.log(combined)
};

var multicomma = values.filter(function(row){
  let combinedName = row[0];
  let splitName = combinedName.split(',');
  return splitName.length > 2;
});

console.log(multicomma);
