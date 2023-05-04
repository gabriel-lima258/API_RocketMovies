const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("Hello, Sr. Gabriel!");
})

// portal localhost:3330
const PORT = 3330; 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));