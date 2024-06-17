const express = require('express');
const userRoute = require('./routes/user.route');
const loginRoute = require('./routes/login.route');
const listRoute = require('./routes/list.route');
const app = express();
const port = 3000;
const connectDB = require('./database/db');
const cors = require('cors');


connectDB();

app.use(cors());

app.use(express.json());
app.use('/auth', userRoute);
app.use('/users', loginRoute);
app.use('/listUsers', listRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})