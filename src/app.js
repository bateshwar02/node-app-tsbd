const express = require('express');
const path = require('path');

const publicDirectoryPath = path.join(__dirname,'../public');

const app = express();
// app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));


app.get('',(req, res) => {
  res.render('index');
})


app.listen(3000,()=>{
    console.log('application server run on 3000 port');
})