const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const {isAuth} = require('./src/middlewares/auth');

const modelsRouter = require('./src/api/routes/models.routes');
const deviceRouter = require('./src/api/routes/device.routes');
const usersRouter = require('./src/api/routes/users.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/models', modelsRouter);

app.use('/device', deviceRouter);

app.use('/users', usersRouter);

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));