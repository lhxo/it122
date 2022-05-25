import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import {getAll, getItem, addItem, deleteItem} from "./data.js"
import { SandwichModel } from "./models/sandwiches.js";
import {PORT, CONNECTION_URL} from "./config/dev.js"

//EXPRESS SERVER
const app = express();
app.set('port', process.env.PORT || 3000); // sets our port
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); // pars url-encoded bodies

//CORS
app.use('api', cors())

//MONGODB
mongoose.connect(CONNECTION_URL, {
    dbName: 'js2Brenden',
    useNewUrlParser: true, 
    useUnifiedTopology:true}
)
mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
  });
  

//Render pages
app.set('view engine', 'ejs'); // set the view engine to ejs
    // Home page shows all items in array
    app.get('/', (req,res) => {
        SandwichModel.find({}).lean()
            .then(
                (sandwiches)=>{
                    res.render('home.ejs', {sandwiches});
                })
            .catch(err => next(err));
    });

   //detail
   app.get('/detail', (req,res, next) => {
    SandwichModel.findOne({name: req.query.name}).lean()
        .then((sandwich) => {
            res.render('detail', {result: sandwich})
        })
        .catch(err => next(err))
   })

   //404 handler
   app.use('*', (req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });

app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${PORT}`)
})