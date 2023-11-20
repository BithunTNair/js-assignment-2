var readlineSync = require('readline-sync');
let number= parseInt(readlineSync.question('Do you want a mutiplication table, Enter a number : '));
for(let i=1;i<=12;i++){
    console.log(number,"*",i,"=",number*i);
}