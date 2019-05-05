const express = require('express');
const path = require('path');
const hbs = require('hbs');

const publicDirectoryPath = path.join(__dirname,'../public');
const app = express();
const port = process.env.PORT || 3000
// app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));


app.get('',(req, res) => {
  res.render('index');
})
app.get('/home',(req, res) => {
  res.render('index');
})
app.get('/admission',(req, res) => {
  res.render('admission');
})
app.get('/staff',(req, res) => {
  res.render('staff');
})
app.get('/contact',(req, res) => {
  res.render('contact');
})
app.get('*', (req, res)=>{
  res.render('404',{
    title:'404',
    name:'Page not Found',
    errorMessage:'Page not Found'
  })
})

app.listen(port,()=>{
    console.log('application server run on port'+port);
})