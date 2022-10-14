let random1 = Math.random() * 100;
let randomint1 = Math.round(random);
console.log(randomint);

let random2 = Math.random() * 100;
let randomint2 = Math.round(random);
console.log(randomint);

if (randomint1 < randomint2 && randomint1 < 50)
{
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
};

if (randomint1 < 30 || randomint2 < 30)
{
    console.log("Eine der beiden ist kleiner als 30");
};

if (randomint1 < 50 && randomint1 != 50)
{
    console.log("Erste Zahl klein, zweite kein 50iger");
};

