let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2024,10,6)
// let myCreatedDate = new Date(2024,10,6,6,3)
// let myCreatedDate = new Date(2024,10,6,18,3)
// let myCreatedDate = new Date("2024-11-06")
// let myCreatedDate1 = new Date("06-11-2024")
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate1.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime()) // Convert time to miliseconds so we can compare easily
// // console.log(myCreatedDate > myTimeStamp)
 
// // to convert time from miliseconds to seconds 

// console.log(Math.floor(myTimeStamp / 1000))

// console.log(myDate)
// console.log(myDate.getDate());
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth()+1);


// console.log(`Today the date is ${myDate.getDate()} and the month is ${myDate.getMonth()}`)

// console.log(myDate.toLocaleString('default', {
//     weekday : "long",
//     dayPeriod : "long",
//     calendar : myDate

// }))

// console.log(myDate.getUTCHours())

console.log(myDate.toLocaleString('en-US', {
    timeZone : 'Asia/Karachi',
    weekday : "long",
    dayPeriod : "long",
    hour : "2-digit",
    minute :"2-digit"
    
}))