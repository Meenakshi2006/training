// getting-started.js
const mongoose = require('mongoose');

//main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rishitay23:rishita1212@cluster0.jxj0z.mongodb.net/');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main