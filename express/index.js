const express = require('express');
const app = express();

let array = new Array();
var a = {};

app.get('/:id', (req, res) => {
    //console.log(req.params.id);
    if(req.url != "/favicon.ico"){
        array.push(req.params.id);
        console.log(array);
        res.send('Hello World btchs!');
    }
});
  
app.get('/:nombre/:edad', (req, res) => {
    if(req.url != "/favicon.ico"){
        a.nombre = req.params.nombre;
        a.edad = req.params.edad;
        console.log(a);
        res.send('Hello World btchs!');
    }
});

app.listen(3000, () => {
    console.log('Server on port 3000!');
});