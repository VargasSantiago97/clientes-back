const DB = require('../connect/connect')
const db = new DB();

class Books {
    constructor(){}

    obtenerTodosLosLibros(aT){
        let sql = "SELECT * FROM Books";
        db.consulta(aT, sql);
    }
    obtenerLibro(aT, idd){
        let sql = `SELECT * FROM Books WHERE Book_ID = ${idd}`;
        db.consulta(aT, sql);
    }
}


module.exports = Books;