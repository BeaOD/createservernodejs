//const http = require('http');
const express = require('express');

//function to handle requests
const handleAllRequests = (requestObject, responseObject) => {
    console.log('hi, i just received a request');
    //console.log(requestObject);
    //responseObject.write('this is your response \n');
    //responseObject.write('another part of the response: yentie obiaa');
    const url = requestObject.url;
    responseObject.setHeader('content-type','text/html');
//     if (url === '/'){
//     responseObject.write("<h3>homepage dis</h3>");
// }
// else if (url === '/login'){
//     responseObject.write('<h2>welcome to login page</h2>');
// }
// else if (url === '/profile'){
//     responseObject.write('<h2>welcome to profile page</h2>');
// }
// else if (url === '/signup'){
//     responseObject.write('<h1>sign up here</h1>');
// }
// else {
//     requestObject.write('<h4>page not found</h4>');
// }
    responseObject.end();
}
const handleHomeRequests = (req,res) =>{
    res.send("<h3>homepage dis</h3>");
}
const handleProfileRequests = (req,res) =>{
    res.send("<h2>welcome to profile page</h2>");
}
const handleLoginRequests = (req,res) =>{
    res.send("<h3>welcome to login page</h3>");
}
const handleSignupRequests = (req,res) =>{
    res.send('<h1>sign up here</h1>');;
}
const handlePageNotFoundRequests = (req,res) =>{
    res.send("<h4>page not found</h4>'");
}

//server created
//const server = http.createServer(handleAllRequests);
const server = express();
server.use('/profile',handleProfileRequests);
server.use('/login',handleLoginRequests);
server.use('/signup',handleSignupRequests);
server.use('/',handleHomeRequests);
server.use(handleAllRequests);

server.listen(3000, '127.0.0.1', () => console.log(' server is ready to accept requests'));
