/**
 * @copyright MrMahir Pvt Ltd - https://mrmahir.com
 * @author Usama Naseer <unaseer932@gmail.com>
 * @since 2021-08-14
 */

const db = require('./models/index');
const User = db.User;

async function routes ( fastify, options ) {
	
	fastify.get('/api/test', async ( request, reply ) => {
		return {message: 'world'};
	});
	fastify.post('/user/new', async ( request, reply ) => {
		const user = await User.create({firstName: 'Jane', lastName: 'Doe', email: 'test@example.com'});
		return {message: 'world', user};
	});
	fastify.post('/user/total', async ( request, reply ) => {
		const user = await User.count({
			group: ['firstName']
		});
		return user;
	});
	
}

module.exports = routes;
