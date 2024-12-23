// Importing Dependencies
const express = require('express');
require('./config/connect');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
const userRoutes = require('./routes/user.route');
const serviceRoutes = require('./routes/service.route');
const proposalRoutes = require('./routes/proposal.route');

// Register Routes
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);
app.use('/proposals', proposalRoutes);

app.use('/image' , express.static('./public'));


// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));