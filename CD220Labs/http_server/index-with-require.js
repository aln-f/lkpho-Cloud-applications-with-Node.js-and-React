// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)

    let date = today.getDate();
    let greeting = "";
    if (date.getHours() < 12)
        greeting = "Good morning!";
    else if (date.getHours() < 18)
        greeting = "Good afternoon!";
    else
        greeting = "Good evening!";

    // Send the response with the appropriate greeting
    res.end(`Hello, ${greeting}\n`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
