const express = require('express');
const app = express();

app.use(express.json())

app.use('', (req, res) => {
    res.json('hello customer')
})

app.listen(8001, () => {
    console.log('app listern port 8001')
})