const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('movies', 'erikaperez', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

//Test DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = {
    sequelize,
}
