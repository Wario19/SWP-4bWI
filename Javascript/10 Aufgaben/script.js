let monthdays = 31;
let startday = 2;
let week = "";
let day = 1;

console.log("| MO | DI | MI | DO | FR | SA | SO |");

for(let i = 1; i <= monthdays + startday; i++) {
    
    if(i <= startday) {
        week += "|    ";
    }
    else if (((i+1)%7 == 0) || (i%7 == 0)) // Aufgabe Teil 2
    {
        week += "| WE ";
        day++;
    }
    else {
        let str_day = String(day).padStart(2, 0);
        week += "| " + str_day + " ";
        day++;
    }

    if (i%7 == 0){
        week += "|"
        console.log(week);
        week = "";
    }
}

if (week != "") {
    for (let i = 0; i < 7 - (monthdays + startday)%7; i++) {
        week += "|    ";
    }
    week += "|";
    console.log(week);
}