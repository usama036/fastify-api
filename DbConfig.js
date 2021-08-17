const {Sequelize, Op, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize('test', 'root', '', {
	host: 'localhost',
	dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
	pool: {max: 5, min: 0, ideal: 10000}
});

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(error => {
	console.error('Unable to connect to the database:', error);
});

