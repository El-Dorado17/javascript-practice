//1.) Return the sum of 2 numbers
const addition = (a, b) =>{
    let sum = a + b
    return sum
}
//console.log(addition(2,4))

//2.) Function that converts mins to seconds
const minToSec = (x) => {
    conversion = x * 60
    return conversion
}
//console.log(minToSec(60))

//3.)
const jewelry = ["Earring", "Ring", "Necklace"]

length = jewelry.length

//console.log(length) //returns 3


//4.)
//console.log(jewelry)
//jewelry.push("Anklet")
//console.log(jewelry)

//5.)
indexOf = jewelry.indexOf("Necklace")
//console.log(indexOf)

//6.) 
const slice = jewelry.slice(1)
//console.log(slice)

//7.)split
const sentence = "I just moved states"

const newArray = sentence.split("s")
// console.log(newArray)
// , 3 <-- limits to only 3 splits 
//"s" removes the s's and makes new quotes: 
//[ 'I ju', 't moved ', 'tate', '' ]

//8.) .pop
jewelry.pop()
//console.log(jewelry)

//9.) .splice
const spliceArray = ["Jan", "Feb", "March", "May"]
spliceArray.splice(3, 0, "Apr") //What is the 0 doing? 
console.log(spliceArray)