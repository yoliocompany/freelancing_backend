const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aminejbali32:sFgSv506GQQvMKJ9@cluster0.0eohk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
