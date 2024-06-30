// Code your solutions in this file

function writeCards(names, occassion){
  let Message = [];
  for(let i = 0; i < names.length; i++) {
    Message.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`)
  }
  return Message;
}
// console.log(writeCards(names, occassion))


function countDown(n) {
  let i = n;
  while(i >= 0) {
    console.log(i)
    i--
  }
}

// countDown(10)

// let i = n;
//   while (i <= n) {
//     console.log(i);
//     i--;
//   }
//   return n