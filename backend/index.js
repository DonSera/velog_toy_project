const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Hello json');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});