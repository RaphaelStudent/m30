const mongoose = require('mongoose');
const express = require('express');
const port = process.env.PORT || 3000;
app = express();

mongoose.connect('mongodb+srv://raphael:<123>@cluster0.gmi5hux.mongodb.net/test')

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