let random = Math.random() * 1000;
let randomint = Math.round(random);
console.log(randomint);

if(randomint > 800)
{
    console.log("> 800");
};

if(500 < randomint && randomint <= 800)
{
    console.log("> 500 and < 800");
};

if(200 < randomint && randomint <= 500)
{
    console.log("> 200 and < 500");
};

if(0 < randomint && randomint <= 200)
{
    console.log("> 0 and < 200");
};