
const mongoose = require('mongoose');

mongoose.connect('YOUR MONGO URL', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connected Sucessfully.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');