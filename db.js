var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/grocery');
mongoose.connect(process.env.DB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('* * * * *  yay, we have connected * * * * *');
});
