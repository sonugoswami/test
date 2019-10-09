const express = require('express')

const port = 4000;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const app = express();




try{

    app.use(cors());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

   app.get('/', (req, res) => {
     res.writeHead(200);
        res.end("hello world\n");
    })

    app.get('/healthcheck', (req, res) => {
        res.send({
            status: 200,
            response: 'Ok'
        });
    })
    app.listen(port, () => console.log(`app listening on port ${port}!`))
}catch(err){
    console.log(">Err",err)
}
