
var http = require("http");
var fs = require("fs");

var server = http.createServer((reg, res) => {

    if(reg.url == "/") {
        fs.readFile("index.html", (err, html) => {
        res.write(html);
         res.end();
        });


    } else if(reg.url == "/urunler") {
       fs.readFile("urunler.html", (err, html) => {
         res.write(html);
          res.end();
       });
    } else {
        fs.readFile("404.html", (err, html) => {
          res.write(html);
           res.end();
        });
    }
    
   
   
});

server.listen(3000, ()=>{
console.log("node.js server at port 3000")
})
