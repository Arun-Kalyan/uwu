const express = require('express');
const sql = require('mysql');
const bp = require('body-parser');


const app = express();
app.use(bp.json());
app.use(bp.urlencoded({extended : false}));
app.use(express.static('script'));

const db = sql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'shield',
    port : 3307

});

db.connect((err) =>{

    if(err)
    {
        console.log(err);
    }

});


app.get('/getPizza', (req, res) =>{

    let qr = `Select * from pizza`;
    db.query(qr, (err, result) =>{
        if(err)
        {
            console.log(err);
        }

        console.log(result);
        var books = result;
        res.send(books);
    });

   



});


app.post('/setPizza', (req, res) =>{

    console.log(req.body);
    var name = req.body.name;
    let qr = `insert into pizza (name) values ('${name}')`;
    db.query(qr, (err, result) =>{
        if(err)
        {
            console.log(err);
        }
    });

    res.redirect('/pizza');



});


app.get('/pizza', (req, res) =>{
    res.sendFile(`${__dirname}/pizza.html`);
});


app.listen(3301, () =>{
    console.log("Server is connected!");
});



    


