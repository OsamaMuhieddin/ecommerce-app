/* const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();//must return so it does not execute the below code
        //after setting all the data to the response it sends the responds
        //we must not write any more 
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data' , (chunk) =>{
            console.log(chunk)
            body.push(chunk); // changing the object nehind the body element
                             //editing the data not the object itself
        }); //allows to listen to certain events
        // ^ will be fired whenever a new chunk is ready to be read
        return req.on('end' , ()=> { // we need to buffer the chunks to work and iteract with
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        }); //will be fired when its done parsing the incoming req
        
        //callbacks , never blocks the code execution
    }
    // process.exit(); quits the event loop process
    res.setHeader('Content-Type' , 'text/html'); // a default header the browser knows and accepts(key value)
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

//module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText: 'Some hard coded text'
// };

//module.exports.handler = requestHandler;
//module.exports.someText = 'Some hard coded text';

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
*/
