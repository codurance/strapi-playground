const express = require('express')
const fetch = require('node-fetch')

const server = express()

function renderBanner(banner) {
  return `<div style="background-color: ${banner.color}"><h1>${banner.title}</h1></div>`
}

server.get('/', (req, res) => {
  fetch('http://content-admin:1337/banners')
    .then(res => res.json())
    .then(banners => res.send(`<!DOCTYPE html>${banners.map(renderBanner).join('')}`))
})

module.exports = server
