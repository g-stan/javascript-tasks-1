'use strict';
var hours = process.argv[2];
var minutes = process.argv[3];
var isCorrect=checkInput(hours,minutes);
if (!isCorrect.value) {
    console.log(isCorrect.message);
}
else {
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
        50:'L'
    };
    console.log(arabToRoman(hours)+':'+arabToRoman(minutes));
}

function checkInput(hours, minutes) {    
    if (process.argv.length != 4) {
        return {value: false, message: 'Amount of arguments isn\'t right'};
    } 
    if (hours.length != 2 || minutes.length != 2 || (parseInt(hours)!= hours) || (parseInt(minutes)!= minutes)) {
        return {value: false, message: 'Incorrect format of time. Use format: XX XX, where X - number'};
    }
    if (hours > 23 || hours < 0 || minutes > 59 || minutes < 0 ) {
        return {value: false, message: 'Incorrect values of time. Interval for hours: 0-23, for minutes: 0-59'};
    }
    else {
        return {value: true, message: 'checkInput succeeded'};
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
