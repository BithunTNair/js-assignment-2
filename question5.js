var readlineSync = require('readline-sync');
let number= parseInt(readlineSync.question('Enter the size of an array : '));
let array=[]
for(let i=0;i<number;i++){
    array[i]=parseInt(readlineSync.question('Enter the values of array : '));
}
console.log("Your array is here",array);
let even=0;
for(i=0;i<=number;i++){
    if(array[i]%2===0){
        even++;
    }
}
console.log("Number of even numbers in the given array is",even);

