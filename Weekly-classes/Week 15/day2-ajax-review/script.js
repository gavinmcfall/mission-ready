"use strict";
console.log("connected ⚡");

document.addEventListener("DOMContentLoaded", fetchCountry);

let countries = [];

function fetchCountry() {
    fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        countries = response;

        // Sort countries alphabetically by common name
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        const countryDropdown = document.getElementById("countryDropdown");

        countries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.name.common;
            option.textContent = country.name.common;
            countryDropdown.appendChild(option);
        });
    });
}

function displaySelectedCountry() {
    const countryDropdown = document.getElementById("countryDropdown");
    const selectedCountryName = countryDropdown.value;
    const selectedCountry = countries.find(country => country.name.common === selectedCountryName);
    const displayCountryDiv = document.getElementById("displayCountry");

    const formattedPopulation = selectedCountry.population.toLocaleString();
    const borders = selectedCountry.borders ? selectedCountry.borders.join(", ") : "None";

    displayCountryDiv.innerHTML = `
        <div><b>Population:</b> ${formattedPopulation}</div>
        <div><b>Borders:</b> ${borders}</div>
    `;
}
