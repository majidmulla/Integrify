// Basic Express.js server setup for API handling
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

// Middleware for cross-origin requests and parsing JSON data
app.use(cors())
app.use(bodyParser.json())

// Importing API routes
const apiRoutes = require('./routes/api')
app.use('/api', apiRoutes)

// Define the server port
const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
