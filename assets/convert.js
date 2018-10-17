// Node script to convert structure of composer-diversity-offline.json
// in preparation for moving to Firestore

const fs = require ('fs');

var input = JSON.parse(fs.readFileSync('./composer-diversity-offline.json', 'UTF-8'));
var values = input.values;
var output = [];

// values = JSON.parse(fs.readFileSync('./test.json', 'UTF-8'));

function parseName(combined){
  console.log(combined)
};

//// 

var multicomma = values.filter(function(row){  
  // take a big array of data and select just the name, which is at index 0
  let combinedName = row[0]; 
  
  // logs each name to the console
  // console.log(combinedName); 
  
  // why do I get the typeError: cannot read property 'split' of undefined?
  if (typeof combinedName == "string") {
    let splitName = combinedName.split(','); 
    return splitName.length > 2;
  }
  
});

output = multicomma;

// Abbreviated output for testing only
// output = values.slice(0, 10);

// Write output to file
fs.writeFile('./test.json', JSON.stringify(output, null, 2), 'utf8', (err) => {
  if (err) throw err;
});
