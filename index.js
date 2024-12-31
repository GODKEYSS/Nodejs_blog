const express = require('express')
const app = express()
const port = 3000
// route 
app.get('/', (req, res) => {
    res.send('Hello World!')
    let a = 1 ;
    let b = 2 ;
    let c = a + b ;
})
// 127.0.0.1 - local host
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 