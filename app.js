const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.json({"message":"hello World"});
})

app.listen(port || 3000, () => {
    console.log(`Server is running on http://localhost:${port}`);
})