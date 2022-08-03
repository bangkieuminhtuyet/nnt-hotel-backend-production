const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  'nnt30994_nnt_hotel_production',
  'nnt30994_nnthotelproduction',
  'Dota2lolstarcraft',
  {
    host: '103.138.88.77',
    dialect: 'mysql',
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectDB;
