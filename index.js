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
// log(cats[1][" isCute"])

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
// const addUp = (num) => {
//     let total = 0
//     for(let i = 0; i <= num; i++) {
//         total += i
//     }
//     log(total)
// }
// addUp(12)

// ******06 - Time******
// const format =(num) => {
//     let hour = Math.floor(num/(3600))
//     num -= hour * (3600)
//     let min = Math.floor(num/(60))
//     num -= min * (60)

//     // log(min, hour, num)
//     log(`${hour}:${min}:${num}`)
// }
// format(3700)

// ******07 - Password generation******
// const generatePassword =(num) => {
    // let randomPw= ""
    // const random = Math.floor((Math.random() * num) + 1)
    // let randomPw = String.fromCharCode(random)

    // log(random)
    // randomPw.push(random)
    // log(randomPw)
// }
// generatePassword(10)

// const generateRandomCapitalLetter = () => {
//     const min = 65
//     const max = 90 - min + 1
//     const random = Math.floor((Math.random() * max) + 1)
//     const letter = String.fromCharCode(random)
// }

// const generatePassword =(num) => {
//     if (num >= 6 && num <= 15) {
//         let password = ""
//         for(let i = 0; i < num; i++) {
//             const letter = generateRandomCapitalLetter()
//             password = password + letter
//         }
//         log(password)
//     }else {
//         log("error")
//     }    
// }
// generatePassword(10)

// ******08 - Let’s play******
const launchDice =(numberOfDice) => {
    // lancer de dé aléatoire
    // let random = Math.floor((Math.random() * 6) + 1)
    
    
    let total = 0
    for(let i = 0; i <= numberOfDice; i++) {
        const min = 1
        const max = 6
        let random = Math.floor((Math.random() * max) + min)
        total += random
        log(total)
    }
    return total
    
}
const player1 = launchDice(5)
const player2 = launchDice(5)

log(`Player 1: ${player1}, Player 2: ${player2}`)

if(player1 < player2) {
    log(`Player 2 wins`)
}else if(player1 > player2) {
    log(`Player 1 wins`)
}else {
    log(`Equality`)
}

