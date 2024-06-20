const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')
const cookieParser = require('cookie-parser')
// Import the login router
const loginRouter = require('./Routes/route');
const { default: mongoose } = require('mongoose');



app.use(cors({origin:  ['http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST'],
  credentials: true
})); // Enable CORS
app.use(express.json());// Handle 404 errors
app.use(cookieParser())


mongoose.connect('mongodb+srv://fahizk100:Ssrq4Q2vHKrVSzms@cluster0.fak3csf.mongodb.net/',{
 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
// Use the login router for the root path
app.use('/', loginRouter);

app.use((req, res) => {
  res.status(404).send('404: Not Found');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
