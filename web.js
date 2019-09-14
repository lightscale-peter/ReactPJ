
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello JWT')
});

app.listen(8001, ()=>{
    console.log(`Express is running on port ${port}`);
});
