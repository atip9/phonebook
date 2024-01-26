const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('static'))

mongoose.connect('mongodb+srv://admin:xiruzJ06W8erf6Pz@cluster0.vaenavs.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const contactRouter = require('./routes/contact');
app.use('/contacts', contactRouter);

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
