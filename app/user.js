var myMap = new Map();

var keyString = 'a string',
  

// setting the values
myMap.set(keyString, "value associated with 'a string'");


myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"


myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'