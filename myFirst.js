// let http = require('http');
// let date = require('./myFIrstModule');

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write("the current date is " + date.currentDate());
//     res.end();
// }).listen(8080);

// let http = require('http');

// http.createServer(function (req, res ) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     res.write(req.url);
//     res.end();
// }). listen(8080);

// let http = require('http');
// let url = require('url');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     let q = url.parse(req.url, true).query;
//     let txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);

// let http = require('http');
// let fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('demoHtml.html', function(err, data) {
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.write(data);
//     return res.end();
//     console.log('Success!');
//     });
// }).listen(8080);

// let fs = require('fs');

// fs.appendFile('mydemofile.text', 'Hello demo File.txt', function(err, data) {
//     if (err) throw err; 
//     console.log('Saved!');
// });

let fs = require('fs');

fs.open('mydemofile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
});