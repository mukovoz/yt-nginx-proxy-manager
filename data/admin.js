const express = require('express')
const app = express()
const port = 3000
//app.set('view engine', 'html');


app.get('/', (req, res) => {
  //res.render('admin.html');
  res.sendFile('admin.html', {
    root: '/data/'
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})