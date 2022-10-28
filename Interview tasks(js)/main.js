//task1
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
function reverseArray(array){
    return array.reverse()
}
console.log(reverseArray(sentence));

//task2
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
function greetAliens(aliens){
   for(let i=0; i<4; i++){
    console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`)
    };
}
greetAliens(aliens);

//task3
const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
  ];
  const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
  ];

let justcoolStuff = coolStuff.filter((value)=>{
    return myStuff.includes(value)
});
    console.log(justcoolStuff);

//task4
const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant'}
  ];

  function isTheDinnerVegan(param){
    for (let element of param){
        if(Object.values(element)[1] === 'plant'){
            return true;
        }else{
            return false;
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
  
  