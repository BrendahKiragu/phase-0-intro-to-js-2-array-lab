// creates an array
const cats = ["Milo", "Otis", "Garfield"];

//appends(adds) a cat to the end of the array list
function destructivelyAppendCat(name) {
 [...cats.push('Ralph')]
  
}

//prepends(adds) a cat at the start of a list
function destructivelyPrependCat(name){
  [...cats.unshift ('Bob')]
}

//removes a cat at the end of a list
function destructivelyRemoveLastCat (name){ 
[...cats.pop()];
}

//removes a cat ata the start of a list
function destructivelyRemoveFirstCat (name){
  [...cats.shift()];
}


function appendCat(name){
  const appendCats = [...cats, "Broom"];
  return appendCats;
}

function prependCat(name){
  const prependCat = ['Arnold', ...cats];
  return prependCat;
}
//console.log(prependCat())

function removeLastCat(){
  return [...cats.slice(0, cats.length-1)]
}

function removeFirstCat (){
  return [...cats.slice(1)]
}
