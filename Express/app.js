const express = require("express")
const path = require('path');

const app = express();
const port = 80;
//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))// FOr serving static files


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug

app.set('views', path.join(__dirname, 'views'))// set the views directory

//ENDPOINTS
app.get('/', (req, res)=>{
    res.status(200).render('index.pug')
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}` )
});


// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
//   })
  



// app.get("/",(req, res)=>{
//     res.send("This is my first express app with harry")

// });
// app.get("/", (req, res)=>{
//     res.send("This is about page of my first express app")
// });