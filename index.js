const express = require('express')
require('dotenv').config()
// can also use import express from "express"
const app = express()
const port = 3220

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/twitter', (req, res) => {
  res.send('hiteshdotcom');
})

app.get('/login', (req, res) => {
  res.send('<h1>This is what you should see if you are on the login route</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})