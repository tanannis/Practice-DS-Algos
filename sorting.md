# How JS' Sorting Method works
https://www.w3schools.com/jsref/jsref_sort.asp
https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677

## .sort()
Each element in an array is converted into string and then UTF-16 code equivalent value of them are compared.

## .sort((a,b) => a - b) 
* same as:
  .sort((a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;
  })

How the elements will be sorted depends on the function’s return value:
if it returns a negative value, the value in a will be ordered before b.
if it returns 0, the ordering of a and b won’t change.
if it returns a positive value, the value in b will be ordered before a.

