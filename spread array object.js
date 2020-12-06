//spread array literals
const animals =  [ "cat",  "dog", "chicken", "horse" ];
const foods = [ "fish", "snack", "nuts", "grass" ];
const allItems = [ ...animals, ...foods];
console.log(allItems);
//[
//  'cat',     'dog',
//  'chicken', 'horse',
//  'fish',    'snack',
//  'nuts',    'grass'
//]

//spread object literals
const feline = {
      legs: 4,
      family: "Felidae"
    };
    const canine = {
      family: "Caninae",
      furry: true
    };
    
    const dog = {
      ...canine,
      isPet: true,
      adorable: true
    };
    const houseCat = {
      ...feline,
      isGrumpy: true,
      personality: "unpredictable"
    };
console.log(dog); //{ family: 'Caninae', furry: true, isPet: true, adorable: true }
console.log(houseCat); //{ legs: 4, family: 'Felidae', isGrumpy: true, personality: 'unpredictable' }