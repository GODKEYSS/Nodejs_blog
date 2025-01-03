const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')  // connect to db
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// HTTP Logger
// app.use(morgan('combined'))

// Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'resources/views'))


// routes init
route(app)
 
// 127.0.0.1 - local host
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// Lấy dữ liệu từ phía client khi gửi qua parameter ta sử dụng req.query
// Lấy dữ liệu từ phía client khi gửi qua form data ta sử dụng req.body 