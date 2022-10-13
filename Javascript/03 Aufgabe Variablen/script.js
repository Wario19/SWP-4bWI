let banana = "banane";
let apple = "apfel";

let bananapriceperkilo = 2.14;
let applepriceperkilo = 3.43;

let appleweight = 0.34;
let bananaweight = 0.22;

let result = 1;

console.log("Preis von einem Kilo Bananen: " + bananapriceperkilo);
console.log("Preis von einem Kilo Äpfeln: " + applepriceperkilo);

result = applepriceperkilo / appleweight;
console.log("Preis von einem Apfel: " + result);

result = bananapriceperkilo / bananaweight;
console.log("Preis von einer Banane: " );

result = applepriceperkilo / (appleweight * 8);
console.log("Preis von 8 Äpfeln: " + result);

result = bananapriceperkilo / (bananaweight * 17);
console.log("Preis von 17 Bananen: " + result);

result = applepriceperkilo * 1000;
console.log("Preis von 1 Tonne Äpfeln: " + result);

result = bananapriceperkilo * 1000;
console.log("Preis von 1 Tonne Bananen: " + result);