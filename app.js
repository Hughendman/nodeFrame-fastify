// Require the framework and instantiate it
const fastify = require('fastify')()

// Declare a route
fastify.get('/home', function (request, reply) {
  reply.send({ hello: 'world' })
})
fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'hello world' }
})
// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})