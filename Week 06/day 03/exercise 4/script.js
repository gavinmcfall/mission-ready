console.log("Connected!");

const userMessage = prompt("Please enter a sentence")

const trimedMessage = userMessage.trim();

if (trimedMessage.length <= 10){
  alert(`Original: ` + userMessage + ` Formatted: ` + trimedMessage.toUpperCase());
} else {
  alert(`Original: ` + userMessage + ` Formatted: ` + trimedMessage.toLowerCase());
}