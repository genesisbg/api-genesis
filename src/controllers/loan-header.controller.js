import { getConnection } from "../db/database"
// interacciones con la base de datos

//* funcion de peticion GET
const getLoanHeaders = async (req, res) => { // GET ALL
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM `enc_prestamo`"); // GET = SELECT
        console.log(result);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getLoanHeader = async (req, res) => { // Get for ID
    try {
        console.log(req.params);
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM `enc_prestamo` WHERE COD_ENC_PRESTAMO = ?", id); // GET = SELECT

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//* funcion de peticion POST
const addLoanHeader = async (req, res) => { // POST
    try {
        const { FECHA_PRESTAMO, CANT_LIBRO, DNI_USUARIO } = req.body;

        if (FECHA_PRESTAMO === undefined || CANT_LIBRO === undefined || DNI_USUARIO === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all field." })
        }

        const LoanHeader = { FECHA_PRESTAMO, CANT_LIBRO, DNI_USUARIO };
        const connection = await getConnection();

        const result = await connection.query('INSERT INTO `enc_prestamo` SET ?', LoanHeader);

        // res.json(result); //* Ver informacion completa de la consulta
        res.json({ message: "LoanHeader Added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
        console.log(error);
    }
};

//* funcion de peticion DELETE
const deleteLoanHeader = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const connection = await getConnection();
        const result = await connection.query("DELETE FROM `enc_prestamo` WHERE COD_ENC_PRESTAMO = ?", id);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateLoanHeader = async (req, res) => {
    try {
        const { id } = req.params;
        const { FECHA_PRESTAMO, CANT_LIBRO, DNI_USUARIO } = req.body;
        const LoanHeader = { FECHA_PRESTAMO, CANT_LIBRO, DNI_USUARIO }

        if (FECHA_PRESTAMO === undefined || CANT_LIBRO === undefined || DNI_USUARIO === undefined) {
            return res.status(400).json({ message: "Bad request. Please fill all field." })
        };

        const connection = await getConnection();
        const result = await connection.query("UPDATE `enc_prestamo` SET ? WHERE COD_ENC_PRESTAMO = ?", [LoanHeader, id]);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getLoanHeaders,
    getLoanHeader,
    addLoanHeader,
    deleteLoanHeader,
    updateLoanHeader
};