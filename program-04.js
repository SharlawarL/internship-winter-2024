console.log("*******************************************")
console.log("      Javascript Map, Filter and Reduce  ")
console.log("******************************************* \n\n")

console.log("Map ==>>> \n")

let arr = [ 2, 4, 8, 10 ]

console.log("Arr ==>", arr)

let updateArr = arr.map( val => val + 2 )

console.log("UpdateArr ==>", updateArr)

console.log("\n\n Filter ==>>> \n")

let updateArrFilter = arr.filter(val => val < 5)

console.log("updateArrFilter ==>", updateArrFilter)


console.log("\n\n Reduce ==>>> \n")

let updateArrReduce = arr.reduce(( pre, curr ) => curr = pre + curr)

console.log("updateArrReduce ==>", updateArrReduce)