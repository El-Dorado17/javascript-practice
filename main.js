//a record of different challenges I've tried


//* 1.) Return the sum of 2 numbers
// const addition = (a, b) =>{
//     let sum = a + b
//     return sum
//console.log(addition(2,4))


//*2.) Function that converts mins to seconds
// const minToSec = (x) => {
//     conversion = x * 60
//     return conversion
// }
//console.log(minToSec(60))

//*3.)
//const jewelry = ["Earring", "Ring", "Necklace"]

//length = jewelry.length
//console.log(length) //returns 3


//*4.)
//console.log(jewelry)
//jewelry.push("Anklet")
//console.log(jewelry)

//*5.)
//indexOf = jewelry.indexOf("Necklace")
//console.log(indexOf)

//*6.) 
//const slice = jewelry.slice(1)
//console.log(slice)

//*7.)split
//const sentence = "I just moved states"

//const newArray = sentence.split("s")
// console.log(newArray)
// , 3 <-- limits to only 3 splits 
//"s" removes the s's and makes new quotes: 
//[ 'I ju', 't moved ', 'tate', '' ]

//*8.) .pop
//jewelry.pop()
//console.log(jewelry)

//*9.) .splice
// const spliceArray = ["Jan", "Feb", "March", "May"]
// spliceArray.splice(3, 0, "Apr") //What is the 0 doing? 
// console.log(spliceArray)




//*10.) Function that only returns true if both flowers have odd AND even pedals. 

// const pedalFunction =(flower1, flower2) =>{
//     if (flower1 %2 === 0 && flower2 %2 !==0){
//         return true
//     } else if (flower2 %2 ===0 && flower1 %2 !==0){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(pedalFunction(1, 2)) 
// console.log('T')

// console.log(pedalFunction(3, 3))
// console.log('F')

// console.log(pedalFunction(2, 5))
// console.log('T')

// console.log(pedalFunction(8, 8))
// console.log('F')


//*11.) function that takes a string and splits it into an array

// const stringToArray = (string) =>{
//     let theSplit = string.split(" ")
//     return theSplit
// }

// console.log(stringToArray("Hey One Two")) // GOT IT




//*12.) Function that gets volume of the inputs, and finds the absolute difference between them; no matter the order
//EXAMPLE - parameters are ([2, 3, 4], [3, 4, 5] (24 subtracted from 60 should return 36)   )

const findDifference = (a, b) =>{
    const cubeA = a[0] * a[1] * a[2]

    const cubeB = b[0] * b[1] * b[2]

    const absoluteDifference = Math.abs(cubeA - cubeB)

    return absoluteDifference
}

console.log(findDifference([9, 7, 2], [5, 2, 2]))

// ? POSSIBLE IN ONE LINE return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);