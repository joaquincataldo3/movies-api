require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const moviesRouter = require('./routers/moviesRoutes');
const actorsRouter = require('./routers/actorRoutes');
const genreRouter = require('./routers/genreRoutes');


const app = express();


app.set('view engine', 'ejs')

app.use('/movies-images', express.static(path.join(__dirname, "./imagesUploads")));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/actors', actorsRouter);
app.use('/movies', moviesRouter);
app.use('/genres', genreRouter);

app.get('/', (req, res) => {
    return res.render('../index.ejs')
})

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Mongo DB Connected');
        const port = process.env.PORT || 3010;
        app.listen(port, () => {
        console.log(`Server opened on ${port}`);
})
    })
    .catch(err => {
        console.log(`Mongo DB connection error: ${err.message}`)
    });

