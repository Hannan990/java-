// function add(num1, num2)
// {
//     let result = num1 + num2
//     return result
// }

// let resultOfAdd = add(2,2)
// console.log(resultOfAdd)

// console.log(add(2,2));

// function add(num1, num2, cb)
// {
//     let result = num1 + num2
//     cb(result)
// }

// add(2, 2, function(resultOfAdd)
// {
//     console.log(resultOfAdd)
// })


// function multiply()
// {
//     let result = 1

//     for(let i=0;i<arguments.length;i++)
//     {
//         result = result * arguments[i]
//     }

//     return result
// }

// console.log(multiply(2,2,2))

// const sum = (num1, num2) => 
// {
//     return num1 + num2
// }

// const sum = (num1, num2) => num1 + num2

// console.log(sum(2,2))

// const obj1 = 
// {
//     name : "Hannan",
//     id : 1,
//     semester : 5,

//     myFunction()
//     {
//         console.log(`Name : ${this.name}\nId : ${this.id}\nSemester : ${this.semester}`)
//     }
// }

// obj1.myFunction()

// const obj1 = 
// {
//     name : String,
//     id : Number,

//     myFunction()
//     {
//         console.log(`Name : ${this.name}\nId : ${this.id}`)
//     }
// }

// obj1.name = "Hannan"
// obj1.id = 1
// obj1.myFunction()

// obj1.myFunction(obj1.name = "Hannan", obj1.id = 1)

// function multiply(num1, num2, cb)
// {
//     let result = num1 * num2

//     cb(result)
// }

// multiply(2, 2, function(resultOfMultiply)
// {
//     console.log(resultOfMultiply)
// })

function multiply(num1,num2,cb)
{
    let result = num1 * num2

    cb(result)
}

multiply(10, 2, funtion = (resultOfMultiply) => console.log(resultOfMultiply))