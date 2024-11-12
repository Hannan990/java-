// const array1 = ["Honda", "Toyota", "Supra"]
// const array2 = ["Lambo", "Ferarri", "Hyundai"]

// array1.push(array2)

// console.log(array1)
// console.log(array1[3][2])

// const array3 = [...array1, ...array2]
// console.log(array3)
// console.log(array1)

// const array3 = array1.flat(Infinity)
// console.log(array3)
// console.log(array1)

// const name = "Hannan"
// const name2 = "Ansari"
// console.log(Array.isArray(name));
// console.log(Array.isArray(array1));

// const array3 = Array.from(name)
// console.log(array3)

// let number1 = 100
// let number2 = 200
// let number3 = 300

// const array3 = Array.of(number1,number2,number3)
// console.log(array3)

// const name1 = "Hannan"
// const name2 = "Ansari"
// const name3 = "Abdul"

// const array3 = Array.of(name1, name2, name3)
// console.log(array3)

// const array1 = ["Honda", "Toyota", "Supra"]
// const array2 = ["Lambo", "Ferarri", "Hyundai"]

// const array3 = array1 + array2 
// console.log(array3)
// console.log(typeof array3)
 
// const array3 = array1.map()


let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

// array1 = array2.copyWithin()
// console.log(array1)

// array1.fill(0, 2, 4)
// console.log(array1)

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) 
{
    for (let i = 2; num > i; i++) 
    {
        if (num % i === 0) 
        {
        return false;
        }
    }
    return num > 1;
}

// console.log(array.filter(isPrime))

// array1.forEach( (element) => console.log(element))

const map1 = array1.map((x) => x*2)
console.log(map1)