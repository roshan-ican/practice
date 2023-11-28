const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const path = require('path')

const {logger} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')

app.use(logger)
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', require('./routes/root'))
app.use(express.json())

app.all('*', (req, res) => {
  res.status(404)

  const acceptsHtml = req.accepts('html')
  const acceptsJson = req.accepts('json')

  if(acceptsHtml) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  }

  if(acceptsJson) {
    res.json({message: '404 not found'})
  }
  
  if(!acceptsJson && !acceptsHtml) {
    res.type(('txt').send('404 not found'))
  }


})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))