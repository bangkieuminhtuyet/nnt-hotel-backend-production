const express = require('express');
const initWebRoute = require('./routes/web');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');
const connectDB = require('./config/connectDb');

const jwt = require('jsonwebtoken');

const nodemailer = require('nodemailer');
const cors = require('cors');
dotenv.config();
const cookieParser = require('cookie-parser');
app.use(methodOverride('X-HTTP-Method-Override'));

//npm i cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
// viewEngine(app);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

initWebRoute(app);
connectDB();

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`http://103.138.88.77:${port}`);
});
