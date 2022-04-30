/* Define a function, searchParty, that accepts 2 arguments:
name (string)
world (object)

The keys in world represent a location. The values can be any combination of strings, arrays, or other objects.

Search through world for name. If name exists in world, return an array with directions. Return null if you can't find name.

Ex:
let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

searchParty('Francis', world); // => ['Fullstack', '25th floor']
searchParty('Franco', world); // => null
*/

function searchParty(name, world) {
    for (const place in world) {
      const value = world[place];
      
      // if value is string, put place in arr and return
      if (typeof value === "string") {
        if (value === name) return [place];
      }
      
      // if value is array and name is included in there, put key in arr and return
      else if (Array.isArray(value)) {
        if (value.includes(name)) return [place];
      }
      
      // else value must be an object, keep searching
      else {
        const directions = searchParty(name, value);
        // if we found the person, concat the most upper place key with the lower place keys
        if (directions) {
          return [place].concat(directions);
        }  
      }
    }
    return null
}

const simpleWorld = {
    'living room': 'Maureen',
    'kitchen': 'Brian',
    'bedroom': 'Julio'
};

const newYorkCity = {
    'Manhattan': {
      'Uptown': {
        'Washington Heights': 'Daniel',
        'UWS': 'Cathy'
      },
      'Midtown': {
        'Madison Square': 'Susan',
        'Theater District': ['Robert', 'Latisha']
      },
      'Downtown': {
        'Tribeca': 'Billy',
        'Financial District': {
          'Fullstack': {
            '11th floor': ['David', 'Nimit'],
            '25th floor': 'Ashi'
          }
        }
      }
    },
    'Brooklyn': {
      'Bushwick': 'Marilyn',
      'Bed-Stuy': ['Juan', 'Denice']
    },
    'Queens': {
      'Astoria': 'Ella',
      'Flushing': 'Eric'
    },
    'Bronx': {
      'Fordham': 'Aaron',
      'Melrose': 'Krysten'
    },
    'Staten Island': {
      'Arlington': ['Nadine', 'Mose'],
      'Elm Park': 'Arthur'
    }
};

// const res = searchParty('Julio', simpleWorld)
// ['bedroom']
const res = searchParty('Nimit', newYorkCity);
// ['Manhattan', 'Downtown', 'Financial District', 'Fullstack', '11th floor']
// const res = searchParty('John', newYorkCity)
// null
console.log("result", res)