const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

// Import the login router
const loginRouter = require('./Routes/route');
const { default: mongoose } = require('mongoose');



app.use(cors()); // Enable CORS
app.use(express.json());// Handle 404 errors



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
