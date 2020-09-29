const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Database connected');
});