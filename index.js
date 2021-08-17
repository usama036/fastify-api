/**
 * @copyright MrMahir Pvt Ltd - https://mrmahir.com
 * @author Usama Naseer <unaseer932@gmail.com>
 * @since 2021-08-14
 */
const fastify = require('fastify')({
	logger: true
})
fastify.register(require('./CustomerController'))
require('./DbConfig')



// Declare a route
fastify.get('/', function (request, reply) {
	reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, function (err, address) {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	fastify.log.info(`server listening on ${address}`)
})
