/* eslint-disable no-console */
const { Sequelize } = require("sequelize");

const config = {
  host: process.env.PG_Host,
  port: process.env.PG_Port,
  database: process.env.PG_Database,
  username: process.env.PG_Username,
  password: process.env.PG_Password
};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "postgres",
    pool: {
      max: parseInt(process.env.Sequelize_Pool_Max, 10) || 5,
      min: 0,
      acquire: parseInt(process.env.Sequelize_Pool_Acquire, 10) || 30000,
      idle: 10000
    },
    logging: (sql, queryExecutionTime) => {
      if (
        queryExecutionTime >
        (parseInt(process.env.Sequelize_Query_TimeLimit, 10) || 1000)
      ) {
        console.log(
          `Slow query (execution time ${queryExecutionTime} ms): ${sql}`
        );
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Connection has been established successfully to,\nDatabase Name: ${config.database}\nUser Name: ${config.username}`
    ); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error(`Unable to connect to the database ${config.database}:`, err); // eslint-disable-line no-console
  });

sequelize
  .sync()
  .then(() => {
    console.log("Table synchronized successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = sequelize;
