'use strict';
var equalNumbers = {
    0:'-',
    1:'I', 
    2:'II', 
    3:'III', 
    4:'IV', 
    5:'V', 
    6:'VI', 
    7:'VII',
    8:'VIII',
    9:'IX',
    10:'X',
    20:'XX',
    30:'XXX',
    40:'XL',
    50:'L'}
    ;
var hours = process.argv[2];
var minutes = process.argv[3];

var check=inputCheck(hours,minutes);
if (!check) {
    console.log('Incorrect values');
}
else {
    console.log(arabToRoman(hours)+':'+arabToRoman(minutes));
}

function inputCheck(hours, minutes) {   
    if (process.argv.length != 4 || hours > 23 || hours < 0 || minutes > 59 || minutes < 0 ) {
        return false;
    }
    else {
        return true;
    }
}

function arabToRoman (arabNumber) {    
    if (arabNumber in equalNumbers) {
        return equalNumbers[arabNumber];
    }
    else {
        return equalNumbers[arabNumber[0]*10]+equalNumbers[arabNumber[1]];
    }    
}
