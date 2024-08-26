"use strict";

console.log("Connected!");

// fetch("example.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (objectOrArray) {
//     console.log(objectOrArray);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Local File
function fetchData() {
  fetch("example.json")
    .then((response) => response.json())
    .then((objectOrArray) => console.log(objectOrArray))
    .catch((error) => console.log(error));
}

function fetchDataAndDisplay() {
  fetch("example.json")
    .then((response) => response.json())
    .then((response) => {
      const fetchedDataDivElement = document.getElementById("fetchedData");
      fetchedDataDivElement.innerHTML = ""; // Clear the previous data
      console.log("Something is weird");
      console.log(response);
      response.forEach(function (person) {
        fetchedDataDivElement.innerHTML += `<p>${person.name}</p>`;
      });
    })
    .catch((error) => console.log(error));
}

// External API

function fetchDataFromExternalAPIData() {
  fetch("https://reqres.in/api/users")
    .then((Externalresponse) => Externalresponse.json())
    .then((ExternalobjectOrArray) => console.log(ExternalobjectOrArray))
    .catch((error) => console.log(error));
}

function fetchDataFromExternalAPIAndDisplay() {
  fetch("https://reqres.in/api/users")
    .then((Externalresponse) => Externalresponse.json())
    .then((Externalresponse) => {
      const fetchedExternalDataDivElement =
        document.getElementById("fetchedDataFromAPI");
      fetchedExternalDataDivElement.innerHTML = ""; // Clear the previous data
      Externalresponse.data.forEach(function (reqresPerson) {
        fetchedExternalDataDivElement.innerHTML += `<p><b>ID:</b> ${reqresPerson.id}</p>`;
        fetchedExternalDataDivElement.innerHTML += `<p><b>Email:</b> ${reqresPerson.email}</p>`;
        fetchedExternalDataDivElement.innerHTML += `<p><b>First Name:</b> ${reqresPerson.first_name}</p>`;
        fetchedExternalDataDivElement.innerHTML += `<p><b>Last Name:</b> ${reqresPerson.last_name}</p>`;
        fetchedExternalDataDivElement.innerHTML += `<b>${reqresPerson.first_name}:</b><br> <img src="${reqresPerson.avatar}" alt="${reqresPerson.first_name} ${reqresPerson.last_name}">`;
        fetchedExternalDataDivElement.innerHTML += `<br>===========================================<br>`;
      });
    })
    .catch((error) => console.log(error));
}

//Pokemon API

function fetchPokemonAPIData() {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((PokemonResponse) => PokemonResponse.json())
    .then((PokemonobjectOrArray) => console.log(PokemonobjectOrArray))
    .catch((error) => console.log(error));
}

// function fetchDataFromExternalAPIAndDisplay() {
//   fetch("https://pokeapi.co/api/v2/pokemon")
//     .then((PokemonResponse) => PokemonResponse.json())
//     .then((PokemonResponse) => {
//       const fetchedExternalDataDivElement =
//         document.getElementById("pokemonData");
//       fetchedExternalDataDivElement.innerHTML = ""; // Clear the previous data
//       PokemonResponse.results.forEach(function (pokemon) {
//         fetchedExternalDataDivElement.innerHTML += `<p> ${pokemon.name}</p>`;
//       });
//     })
//     .catch((error) => console.log(error));
// }

function fetchDataFromExternalAPIAndDisplay(
  url = "https://pokeapi.co/api/v2/pokemon"
) {
  fetch(url)
    .then((PokemonResponse) => PokemonResponse.json())
    .then((PokemonResponse) => {
      const fetchedExternalDataDivElement =
        document.getElementById("pokemonData");
      // Append new data to the existing content
      PokemonResponse.results.forEach(function (pokemon) {
        fetchedExternalDataDivElement.innerHTML += `<p>${pokemon.name}</p>`;
      });

      // If there's a next page, fetch it
      if (PokemonResponse.next) {
        fetchDataFromExternalAPIAndDisplay(PokemonResponse.next);
      }
    })
    .catch((error) => console.log(error));
}
