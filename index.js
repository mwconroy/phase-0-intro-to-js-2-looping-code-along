const names = ["Lisa", "Kaitlyn", "Ali"];

function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  console.log(birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!');
  debugger
  }
  return birthday;
}

function countDown(number) {
  while(number > 0) {
    console.log(number);
    number -= 1;
  }
  console.log( number );
}