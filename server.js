const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
    });

const auth = require('./token');

const userRouter = require('./routes/userRoute');
const table = require('./routes/tableRoute');

app.use('/user', userRouter);
app.use('/data',auth, table);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });