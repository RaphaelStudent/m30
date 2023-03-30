const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 3000;
app = express();

mongoose.connect('mongodb://127.0.0.1:2701/Activities')

const activityschema = new mongoose.Schema({
    activity: {type: String, required:true}
})




// app.get('/', (req,res) => {


// })


app.get('/', (req,res)=> {
    const task1 = new activitymodel({
        activity: 'activity1'

    })

    activitymodel.insertmany([task1])

    res.send('<h2>Document Address<h2>')

})

app.listen(port, () => {
    console.log('server is running on port:' + port)
})