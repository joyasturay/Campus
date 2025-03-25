const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const collegeRoutes=require('./routes/collegeRoutes');
// Middleware
app.use(cors({
    origin: 'http://localhost:5174', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/college",collegeRoutes);


const MONGO_URL = process.env.MONGO_URL;
async function connect() {
    try {
        await mongoose.connect(MONGO_URL, {});
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}
connect();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('College Platform API is running');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));