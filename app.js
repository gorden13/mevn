const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express();

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth-routes'))
app.use('/api/link', require('./routes/link-routes'))
app.use('/api/t', require('./routes/redirect-routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

const PORT = config.get('port') || 3000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  } catch (error) {
    console.error('Server error', e.message)
    process.exit(1);
  }
}

start()

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}...`)
})