const express = require('express');
const app = express();

app.use(express.json())

app.use('', (req, res) => {
    res.json('hello shopping')
})

app.listen(8003, () => {
    console.log('app listern port 8003')
})