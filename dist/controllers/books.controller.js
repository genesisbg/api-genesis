"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../db/database");
// interacciones con la base de datos

//* GET
var getBooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query('CALL `spGetAllbooks`()');
        case 6:
          result = _context.sent;
          res.json(result[0]);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getBooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getBook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context2.sent;
          _context2.next = 7;
          return connection.query('CALL `spGetBook`(?)', id);
        case 7:
          result = _context2.sent;
          if (!(result[0][0] === undefined)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "El libro ingresado no existe"
          }));
        case 10:
          res.json(result[0]);
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getBook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* POST
var addBook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var SIPNOPSIS, TITULO, FECHA_PUBLICACION, NUM_SERIE, EDITORIAL, COD_GENERO, NOM_AUTOR, book, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(req.body.SIPNOPSIS);
          SIPNOPSIS = req.body.SIPNOPSIS;
          TITULO = req.body.TITULO;
          FECHA_PUBLICACION = req.body.FECHA_PUBLICACION;
          NUM_SERIE = req.body.NUM_SERIE;
          EDITORIAL = req.body.EDITORIAL;
          COD_GENERO = req.body.COD_GENERO;
          NOM_AUTOR = req.body.NOM_AUTOR; // Valida si los campos de la peticion están llenos o no
          if (!(SIPNOPSIS === undefined)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la SINOPSIS del libro"
          }));
        case 11:
          if (!(TITULO === undefined)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el TITULO del libro"
          }));
        case 13:
          if (!(FECHA_PUBLICACION === undefined)) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE PUBLICACION del libro"
          }));
        case 15:
          if (!(NUM_SERIE === undefined)) {
            _context3.next = 17;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el NUMERO DE SERIE del libro"
          }));
        case 17:
          if (!(EDITORIAL === undefined)) {
            _context3.next = 19;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la EDITORIAL del libro"
          }));
        case 19:
          if (!(COD_GENERO === undefined)) {
            _context3.next = 21;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el GENERO del libro"
          }));
        case 21:
          if (!(NOM_AUTOR === undefined)) {
            _context3.next = 23;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el AUTOR del libro"
          }));
        case 23:
          /*
                  if (!req.files || Object.keys(req.files).length === 0) {
                      return res.status(400).json({ message: 'No sea enviado ningun archivo' });
                  }
          */
          book = {
            SIPNOPSIS: SIPNOPSIS,
            TITULO: TITULO,
            FECHA_PUBLICACION: FECHA_PUBLICACION,
            NUM_SERIE: NUM_SERIE,
            EDITORIAL: EDITORIAL,
            COD_GENERO: COD_GENERO,
            NOM_AUTOR: NOM_AUTOR
          };
          _context3.next = 26;
          return (0, _database.getConnection)();
        case 26:
          connection = _context3.sent;
          _context3.next = 29;
          return connection.query("INSERT INTO libro(SIPNOPSIS, TITULO, FECHA_PUBLICACION, NUM_SERIE, EDITORIAL, COD_GENERO, NOM_AUTOR) VALUES ('".concat(book.SIPNOPSIS, "','").concat(book.TITULO, "','").concat(book.FECHA_PUBLICACION, "','").concat(book.NUM_SERIE, "','").concat(book.EDITORIAL, "','").concat(book.COD_GENERO, "','").concat(book.NOM_AUTOR, "');"));
        case 29:
          res.status(201).json({
            message: 'Libro añadido'
          });
          _context3.next = 42;
          break;
        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          // Manejo de errores sql
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 38 : _context3.t1 === 1452 ? 39 : 40;
          break;
        case 38:
          return _context3.abrupt("return", res.status(400).json({
            message: "El libro ingresado ya existe"
          }));
        case 39:
          return _context3.abrupt("return", res.status(400).json({
            message: "Revise que el genero y autor estén registrados"
          }));
        case 40:
          console.log("Here");
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 42:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 32]]);
  }));
  return function addBook(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* DELETE
var deleteBook = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          connection = _context4.sent;
          _context4.next = 7;
          return connection.query('CALL `spDeleteBook`(?)', id);
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(400).json({
            message: "Libro no existente"
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Libro eliminado"
          }));
        case 13:
          return _context4.abrupt("return", res.status(404).json({
            message: "Error, intentelo nuevamente mas tarde"
          }));
        case 14:
          _context4.next = 20;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t1 = _context4["catch"](0);
          res.status(500);
          res.send(_context4.t1.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function deleteBook(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* PUT
var updateBook = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body, SIPNOPSIS, TITULO, FECHA_PUBLICACION, NUM_SERIE, EDITORIAL, COD_GENERO, NOM_AUTOR, IMAGEN, imagenBuffer, imagenBase64, books, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body = req.body, SIPNOPSIS = _req$body.SIPNOPSIS, TITULO = _req$body.TITULO, FECHA_PUBLICACION = _req$body.FECHA_PUBLICACION, NUM_SERIE = _req$body.NUM_SERIE, EDITORIAL = _req$body.EDITORIAL, COD_GENERO = _req$body.COD_GENERO, NOM_AUTOR = _req$body.NOM_AUTOR; // Se requiere la imagen y se parsea a base64
          IMAGEN = req.files.IMAGEN;
          imagenBuffer = IMAGEN.data;
          imagenBase64 = imagenBuffer.toString("base64"); // Valida si los campos de la peticion están llenos o no
          if (!(SIPNOPSIS === undefined)) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la SINOPSIS del libro"
          }));
        case 8:
          if (!(TITULO === undefined)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el TITULO del libro"
          }));
        case 10:
          if (!(FECHA_PUBLICACION === undefined)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la FECHA DE PUBLICACION del libro"
          }));
        case 12:
          if (!(NUM_SERIE === undefined)) {
            _context5.next = 14;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el NUMERO DE SERIE del libro"
          }));
        case 14:
          if (!(EDITORIAL === undefined)) {
            _context5.next = 16;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la EDITORIAL del libro"
          }));
        case 16:
          if (!(COD_GENERO === undefined)) {
            _context5.next = 18;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el GENERO del libro"
          }));
        case 18:
          if (!(NOM_AUTOR === undefined)) {
            _context5.next = 20;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el AUTOR del libro"
          }));
        case 20:
          books = {
            SIPNOPSIS: SIPNOPSIS,
            TITULO: TITULO,
            FECHA_PUBLICACION: FECHA_PUBLICACION,
            NUM_SERIE: NUM_SERIE,
            EDITORIAL: EDITORIAL,
            COD_GENERO: COD_GENERO,
            NOM_AUTOR: NOM_AUTOR
          };
          _context5.next = 23;
          return (0, _database.getConnection)();
        case 23:
          connection = _context5.sent;
          _context5.next = 26;
          return connection.query("CALL spUpdateBook('".concat(id, "', '").concat(books.SIPNOPSIS, "','").concat(books.TITULO, "','").concat(books.FECHA_PUBLICACION, "','").concat(books.NUM_SERIE, "','").concat(books.EDITORIAL, "','").concat(books.COD_GENERO, "','").concat(books.NOM_AUTOR, "','").concat(imagenBase64, "');"));
        case 26:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 30 : _context5.t0 === 1 ? 31 : 32;
          break;
        case 30:
          return _context5.abrupt("return", res.status(400).json({
            message: "Libro no existente"
          }));
        case 31:
          return _context5.abrupt("return", res.status(202).json({
            message: "Datos del libro actualizados"
          }));
        case 32:
          return _context5.abrupt("return", res.status(404).json({
            message: "Error, intentelo nuevamente mas tarde"
          }));
        case 33:
          _context5.next = 43;
          break;
        case 35:
          _context5.prev = 35;
          _context5.t1 = _context5["catch"](0);
          _context5.t2 = _context5.t1.errno;
          _context5.next = _context5.t2 === 1062 ? 40 : _context5.t2 === 1452 ? 41 : 42;
          break;
        case 40:
          return _context5.abrupt("return", res.status(400).json({
            message: "El libro ingresado ya existe"
          }));
        case 41:
          return _context5.abrupt("return", res.status(400).json({
            message: "Revise que el genero y autor estén registrados"
          }));
        case 42:
          return _context5.abrupt("return", res.status(500).send(_context5.t1));
        case 43:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 35]]);
  }));
  return function updateBook(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getBooks: getBooks,
  getBook: getBook,
  addBook: addBook,
  deleteBook: deleteBook,
  updateBook: updateBook
};
exports.methods = methods;