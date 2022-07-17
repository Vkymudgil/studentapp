const express = require ('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/hello', (req,res) => {
    res.send("Hello World!");
})

app.post('/student', (req,res) => {
  console.log(req.body);
  let data = JSON.stringify(req.body);
  fs.appendFile('student.txt', data , (err) => {
    if(err){
      console.log(err);
    } else {
      res.send('Data Saved In File');
    }
  });
})


app.listen(3000, ()=> {
  console.log('server running on port 3000');
})