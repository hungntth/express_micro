const express = require('express');
const app = express();

app.use(express.json())

app.use('', (req, res) => {
    res.json('hello product')
})

app.listen(8002, () => {
    console.log('app listern port 8002')
})