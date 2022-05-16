import http from 'http';
import {parse} from 'querystring';
import path from 'path';
import express from 'express';

import {getAll, getItem, addItem, deleteItem} from './data.js'

const app = express();
app.set('port', process.env.PORT || 3000); // sets our port
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // pars url-encoded bodies
app.set('view engine', 'ejs'); // set the view engine to ejs
    // send content of 'home' view to browser
    app.get('/', (req,res) => {
        res.render('home', {sandwiches: getAll()})
    });
   
   // send plain text response
   app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
   });

   //detail query string
   app.get('/detail', (req,res)=>{
    let result = getItem(req.query.name);
    res.render('detail', {name: req.query.name, result: result});
    //console.log(req.query);
   })
   
   // define 404 handler
   app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });

app.listen(app.get('port'), ()=>{
    console.log('Server running on port 3000')
})