
console.log("*******************************************")
console.log("      Javascript Loops  ")
console.log("******************************************* \n\n")

console.log("For Loop ==>>> \n")

for( let i = 0; i <= 10 ; i++ )
{
    console.log("Number ", i)
}

console.log("\n\nFor/in Loop ==>>> \n")

const person = { "firstname": "Lalit", "lastname": "Sharlawar", "mobile": "9657256675" }

console.log(person)

for(let key in person)
{
    console.log("Key =>", key, person[key])
}

console.log("\n\nFor/of Loop ==>>> \n")

const cars = [ "TATA", "BMW", "AUDI"]

console.log(cars)
for(let key of cars)
{
    console.log(key)
}

for(let index in cars)
{
    console.log("Key =>", index, cars[index])
}

console.log("\n\nWhile Loop ==>>> \n")

var i = 0;

while(i < 10)
{
    console.log("Number ", i)
    i++;
}

console.log("\n\nDo While Loop ==>>> \n")


var j = 0;

do {
    console.log("Number ", j)
    j++;
}
while(j < 10)