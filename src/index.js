const handlebars = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//use static files 
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));



route(app);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})