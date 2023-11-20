var readlineSync = require('readline-sync');
let mark= parseInt(readlineSync.question('Please Enter Your Mark : '));
if(mark>90){
    console.log("You got A grade");
}else if(mark>80){
    console.log("You got B grade");
}else if(mark>70){
    console.log("You got C grade");
}else if(mark>60){
    console.log("You got D grade");
}else if(mark>=50){
    console.log("You got E grade");
}else if(mark<=50 && mark>=0){
    console.log(" You were failed the examination");
}else{
    console.log("Invalid");
}