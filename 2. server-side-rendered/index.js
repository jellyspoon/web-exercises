const express = require('express')
const Handlebars = require('handlebars')
const fs = require('fs')

const source = fs.readFileSync('./pages/template.hbs', 'utf-8')
const pageTemplate = Handlebars.compile(source)

const navBarSource = fs.readFileSync('./pages/navigation.hbs', 'utf-8')

const indexPagedata = {
  navBar: navBarSource,
  pageTitle: 'Index',
  pageText: 'This is the index page'
}

const aboutPageData = {
  navBar: navBarSource,
  pageTitle: 'About',
  pageText: 'This is the about page'
}

const app = express()

app.use('/about', (req, res) => {
  res.send(pageTemplate(aboutPageData))
})

app.use('/', (req, res) => {
  res.send(pageTemplate(indexPagedata))
})

app.listen(3000, () => console.log(`App listening on port 3000`))
