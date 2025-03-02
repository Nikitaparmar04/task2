const express = require('express');
const bodyParser= require('body-parser');
const app = express()
const port = 5000
app.use(express.json());
app.set('view engine','pug');
app.set('views', './views');

app.get('/form',function (req, res)  {
   res.render('form');
})

app.get('/about',function (req, res)  {
    var data=req.query.name;
    console.log("Name:"+ data);
    res.render('about',{
        "data" :{
          "name" : req.query.name,
           "password" : req.query.password,
           "email" : req.query.email,
           "gender" : req.query.gender,

           "city" : req.query.city,
        }
    });
 })

app.get('/', (req, res) => {
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})