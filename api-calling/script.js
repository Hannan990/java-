// const button = document.getElementById("Search_Button");
// const input = document.getElementById("City_Input");

// async function getData(cityName)
// {
//     const promise = await fetch (`https://api.weatherapi.com/v1/current.json?key=edda662520f2491cb74184304241211&q=${cityName}&aqi=yes`)
//     return await promise.json()
// }

// button.addEventListener("click", async () => {
//     const value = input.value
//     const result = await getData(value)
//     console.log(result)
// });

// console.log(button.addEventListener())


const button = document.getElementById("Search_Button")
const input = document.getElementById("City_Name")

async function getData(cityName)
{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=edda662520f2491cb74184304241211&q=${cityName}&aqi=yes`)
    return promise.json()
}

button.addEventListener("click", async () => {
    const result = await getData(input.value)
    console.log(result)
})