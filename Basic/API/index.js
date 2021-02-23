const fs = require('fs');
const http = require('http')

const data=fs.readFileSync('json11.json','utf-8')
const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end("Hello from Home Side")
        console.log("/");
    }
    else if (req.url == '/about') {
        res.end("Hello from about side")
    }
    else if (req.url == '/api') {

        // fs.readFile('json11.json', 'utf-8', (err, data) => {

        //     if (err) {
        //         console.log(err);
        //         throw err
        //     }
            console.log('/api');
            res.end(data)

            res.writeHead(200,{"Content-type":"application/json"})

        // })

    }
    else {
        res.writeHead(404, { 'Content-type': "text/html" })
        res.end("<h1>404 Error Pages . Page does not Exist</h1>")
    }


}).listen(8081)
console.log('http//127.0.0.1:8081');