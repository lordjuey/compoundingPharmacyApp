const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const formulaRouter = require('./routes/formulas');
const pharmacistsRouter = require('./routes/pharmacists');

app.use('/formulas', formulaRouter);
app.use('/pharmacists', pharmacistsRouter);

app.listen(port, () => {
    console.log(`LORDJUEY XXX---///Server is running on port: ${port}`);
});