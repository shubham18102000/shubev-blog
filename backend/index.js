const express = require('express');
const app = express();

const PORT = 4000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Backend! my name is shubev');
}); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// https://shubev-blog-backend.vercel.app/