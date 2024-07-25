const http = require("http");
const userList = [
  { name: "John", age: 25 },
  { name: "Smith", age: 30 },
  { name: "Jane", age: 22 },
  { name: "Doe", age: 40 },
];

const server = http.createServer((request, response) => {
  console.log("request received");
  console.log(request.url);
  if (request.url === "/") {
    response.write("<h1>Hello World</h1>");
    response.end();
  } else if (request.url === "/api/greet") {
    response.write(
      "<h1>Hi Dave</h1><img src='https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-articleLarge.jpg?quality=75&auto=webp&disable=upscale'></img>"
    );
    response.end();
  } else if (request.url === "/api/users") {
    // Convert the user list to an HTML string
    let html = "<h1>User List</h1>";
    userList.forEach((user) => {
      html += `<h2>${user.name}, Age: ${user.age}</h2>`;
    });

    // Send the HTML response
    response.write(html);
    response.end();
  }
});

server.listen(4000, () => {
  console.log("server is running on port 4000");
});
