// const cafe = {
//     name:"Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers:true,
//     drinks:[
//         "Cappucino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],
// };

// const person = {
//     name: "Ayesha",
//     age: "36",
//     sayHi(){
//         return `Hello, my name is ${this.name}`
//     }
// }
// console.log(person.sayHi());

// let pet = {
//     name: "star",
//     typeOfPet: "cat",
//     age:2,
//     isEating: false,
//     colour:"white",

//     eat(){
//         if(this.isEating){
//         return `${pet.name} is eating`;
//         }
//     },
//     drink(){
//         return `${pet.name} is drinking`;
//     }

// }


// let day = "Sunday";
// let alarm = {
//     weekendAlarm:"no alaram needed",
//     weekdayAlarm :"get up at 7 am",
// }
// switch(day){
//     case "Saturday":
//     case "Sunday":
//         console.log(alarm["weekendAlarm"]);
//         break;
//     default:
//         console.log(alarm["weekdayAlarm"]);
// }

let order = "none";
let coffeeShop = {
    branch:"Arbury Road",
    drinks:[
        {Cappucino:2},
        {Latte:2},
        {FilterCoffee:2.2},
        {Tea:1},
        {HotChocolate:2}],
    food:[{lemonCake:1.5},
          {muffin:1}, 
          {chocolateCake:2}],
    drinksOrdered(){
                return ``
    },
    foodOrdered(){

    }
}