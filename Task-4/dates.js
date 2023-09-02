var datestr='4/15/2023';
let [month,date,year]=datestr.split('/');
let day=date%7;
switch(day){
    case 0:day='Sunday';
    break;
    case 1:day='Monday';
    break;
    case 2:day='Tuesday';
    break;
    case 3:day='Wednesday';
    break;
    case 4:day='Thursday';
    break;
    case 5:day='Friday';
    break;
    case 6:day='Saturday';
    break;
}

let montharray={
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'jDecember'
}
console.log("Greetings, Today is "+`${day}`+" and it's "+`${date}`+" "+`${montharray[month]}`);