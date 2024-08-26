"use strict";
console.log('Connected!')

// setTimeout(() => {
//     // console.log('Hello from the inside!')
// }, 1000);

// // console.log('Greetings from the outside!')


// const coffee = new Promise((resolve, reject) => {
//     const everythingOK = false;

//     if(everythingOK){
//         resolve('Everything is OK!');
//     }else{
//         reject('Something went wrong!');
//     }
// });

// coffee.then((result) => {
//     // console.log(result);
// }).catch((error) => {
//     // console.error(error);
// });

//Actual fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     console.log(response.json());

//     if (response.status === 404){
//        throw new Error('Page not found');
//     }
// })
// .then((res) => {console.log(res)})
// .catch((error) => {console.error(error)});

//Syntactic sugar fetch
async function asyncFetch(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    console.log(result);
}
asyncFetch();


// fetch('https://pokeapi.co/api/v2/pokemon')
// .then((res) => res.json()) // Convert the response to JSON
// .then((data) => {console.log(data.results)}) // Log the array of Pokemon
// .catch((error) => {console.error(error)});

async function fetchPoke(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const result = await response.json();
    console.log(result);
}
fetchPoke();

// Try Catch
async function callBadFetch(){
    try{
        const myFetch = await fetch ('https://gooooozxsdooooogle.com/');
        console.log(myFetch);
    } catch (err) {
        console.error(err);
    }
    alert('Something went wrong!');
}

callBadFetch();