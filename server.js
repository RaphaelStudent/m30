// const mongoose = require('mongoose');
// const express = require('express');
// const port = process.env.PORT || 3000;
// app = express();

// mongoose.connect('mongodb+srv://raphael:<123>@cluster0.gmi5hux.mongodb.net/test')

// const activityschema = new mongoose.Schema({
//     activity: {type: String, required:true}
// })




// // app.get('/', (req,res) => {


// // })


// app.get('/', (req,res)=> {
//     const task1 = new activitymodel({
//         activity: 'activity1'

//     })

//     activitymodel.insertmany([task1])

//     res.send('<h2>Document Address<h2>')

// })

// app.listen(port, () => {
//     console.log('server is running on port:' + port)
// })
const mongoose = require('mongoose');
(express = require('express')), (app = express());
const port = 3000;
mongoose.connect('mongodb+srv://raphael:<123>@cluster0.gmi5hux.mongodb.net/test', {
useNewUrlParser: true,
});
// Create a Schema object
const activitySchema = new mongoose.Schema({
activity: { type: String, required: true },
});
// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('Activity', activitySchema);
app.get('/', (req, res) => {
const task1 = new Activitymodel({
activity: 'activity 1',
});
Activitymodel.insertMany([task1], function (err) {
if (err) {
console.log(err);
} else {
console.log('successfully created db');
// mongoose.connection.close(); }
};
res.send(`<h1>Document Added</h1>`);
})});
app.listen(port, () => {
console.log(`Server is running on port: ${port}`)})
