import http from 'http';
import {parse} from 'querystring';
import path from 'path';
import express from 'express';

import {getAll, getItem, sandObj} from './data.js'

const app = express();
app.set('port', process.env.PORT || 3000); // sets our port
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // pars url-encoded bodies
app.set('view engine', 'ejs'); // set the view engine to ejs
    // send content of 'home' view to browser
    app.get('/', (req,res) => {
    let sandwiches = sandObj()
    res.render('home', sandwiches);
    });
   
   // send plain text response
   app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
   });

   //detail query string
   app.get('/detail', (req,res)=>{
       res.type('text/html');
       res.render('detail')
       res.end()
   })
   
   // define 404 handler
   app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });

app.listen(app.get('port'), ()=>{
    console.log('Express Started')
})