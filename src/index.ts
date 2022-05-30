import express from 'express';
import cors from 'cors'
import { AddressInfo } from 'net';

// init project
let app = express();

// enable cors
app.use(cors({optionsSuccessStatus: 200}));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


// configure api endpoints
app.get("/api/hello", function (req, res) {
    res.json({greeting: 'hello API'});
});


// listen for requests :)
let listener = app.listen(process.env.PORT, function () {
    const port = (listener.address() as AddressInfo).port
    if (port) {
        console.log('Your app is listening on port ' + port);
    }
    else {
        console.log('Your app failed to start!');
    }
});