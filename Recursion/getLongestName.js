/* Get Longest Name
Write a function, getLongestName, that accepts an object as an argument. The object represents a family tree. Return the longest name in the family.

Ex:
family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};

getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'
*/

function getLongestName(obj, longestName = "") {
    for (const [key, value] of Object.entries(obj)) {
      // if value is another object but not null, keep digging (null is an object type)
      if (typeof value === "object" && value !== null) {
        longestName = getLongestName(value, longestName);
      } else {
        // compare one which is longer
        if (key.length > longestName.length) {
          longestName = key;
        }  
      }
    }
    return longestName;
}

const family = {
    'Ludie Cook': {
      'Laura Montano': null,
      'John Drewry': {
        'Deborah Gore': null,
        'Beverly Marquez': {
          'Nina Rhone': {
            'William Rhodes': null,
            'Paul Nell': null,
            'Sir Paddington the Fourth, of the county Wilstonshire': null
          }
        }
      }
    }
};

const name = getLongestName(family);
console.log("longest name is: ", name);

