import mysql from "promise-mysql";
import config from "../config/config";

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port,
})

//* se crea la conexion a la base de datos
// const connection = mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
//     port: config.port,
// });

//* funcion que retorna la conexion
const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}