const server = require('./server')

const port = 8080

server.listen(port, () => console.log(`front-end running on http://localhost:${port}/`))

