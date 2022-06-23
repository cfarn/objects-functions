const log = console.log

// ******01 - Object******
const cat = {
    name: "Garfield",
	age: 3,
	isCute: true,
}
// log(cat)
// log(cat.age)
// if(cat.isCute) {
    // log("So cute !")
// }

// ******02 - Combine******
// const cat2 =  {
//     name: "June",
//     age: 1,
//     isCute: false,
// }
// let cats = [cat, cat2]
// log(cats[0].age)
// log(cats[1].isCute)

// ******03 - Even******
// const checkIfEven = (num) => {
// 	if(num % 2 === 0) {
//         log("even")
//     }else {
//         log("odd")
//     }
// }
// checkIfEven(5)

// ******04 - Compare******
// const compare = (x, y) => {
//     if(x > y) {
//         log("x is bigger")
//     }else if (x < y) {
//         log("y is bigger")
//     }else {
//         log("both are the same")
//     }
// }
// compare(1, 5)

// ******05 - Add Up******
const addUp = (num) => {
    let total = 0
    for(let i = 0; i <= num; i++) {
        total += i
    }
    log(total)
}
addUp(12)