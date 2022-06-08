
"use strict";
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
// //IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){
    let results = dishes.filter(function(element){
        //console.log("element inside problem one filter: ", element);
        return (element.cuisine === "Vegetarian");
    })
    return results;
}

let veggieFood = problemOne();
console.log("VeggieFood from filter", veggieFood);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
function problemTwo(){
    let userCuisineRequest = prompt("Enter a cuisine");
    let results = dishes.filter(function(element){
        return (element.cuisine === userCuisineRequest);
    })
    return results;
}

let userPick = problemTwo();
console.log("Problem two results", userPick);

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    let results = dishes.filter(function(element){
        return (element.cuisine==="Italian" && element.servings > 5);
    })
    return results;
}

let filteredDishes = problemThree();
console.log("Problem three results", filteredDishes);


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    let results = dishes.filter(function(element){
        return(element.id === element.servings);
    })
    return results;
}

let probFourResults = problemFour();
console.log("Problem four results", probFourResults)


//5. Create a function that will return only dishes whose serving count is even.
//Filter
function problemFive(){
    let results = dishes.filter(function(element){
        return(element.servings % 2 === 0);
    })
    return results;
}

let probFiveResults = problemFive();
console.log("problem five results", probFiveResults);

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    let results = dishes.filter(function(element){
        return(element.ingredients.includes("chickpea"));
    })
    return results;
}
let probSixResults = problemSix();
console.log("problem six results", probSixResults);


//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(){
    let userIngrediant = prompt("Enter an ingrediant");
    let results = dishes.filter(function(element){
        return(element.ingredients.includes(userIngrediant));
    });
    return results;
}
let probSevenResults = problemSeven();
console.log("problem seven results", probSevenResults);


//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map
function problemEight(){
    let cuisineTypesArray = dishes.map(function(element){
        return(element.cuisine);
    });
    return cuisineTypesArray;
}
let probEightResults = problemEight();
console.log("problem eight results", probEightResults);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 
function problemNine(){
    let cuisineTypesArray = dishes.map(function(element){
        return (element.cuisine + " "+ element.name);
    });
    return cuisineTypesArray;
}

let problemNineResults = problemNine();
console.log("problem nine resuls", problemNineResults);


//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]
function problemTen(){
    let veggieDishes = dishes.filter(function(element){
        return element.cuisine==="Vegetarian";
    })
    let veggieAndNames = veggieDishes.map(function(element){
        return element.cuisine+" "+element.name;
    })
    return veggieAndNames;
}
let problemTenResults = problemTen();
console.log("problem 10 results", problemTenResults);

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.
function problemEightB(){
    let cuisineTypesArray = dishes.map(function(element){
        return(element.cuisine);
    });
    let noDuplicates = cuisineTypesArray.filter(function(element, index){
        return cuisineTypesArray.indexOf(element)===index;
    });
    return noDuplicates;
}
let probEightBResults = problemEightB();
console.log("problem eight B results", probEightBResults);

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    let results = dishes.filter(function(element){
        return(element.ingredients.includes("tomato" || "cheese"));
    });
    return results;
}
let probElevenResults = problemEleven();
console.log("problem Eleven results", probElevenResults);


//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function problemTwelve(){
    let results = dishes.reduce(function(total, element){
        return total + element.servings;
    });
    return results;
}
let problemTwelveResults = problemTwelve();
console.log("Problem Twelve Results", problemTwelveResults);



//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
