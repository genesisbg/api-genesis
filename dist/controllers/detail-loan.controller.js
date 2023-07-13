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

// GET
var getDetailLoans = /*#__PURE__*/function () {
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
          return connection.query('CALL `spGetAllDetailLoans`()');
        case 6:
          result = _context.sent;
          // GET = SELECT

          res.json(result[0]);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getDetailLoans(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getDetailLoan = /*#__PURE__*/function () {
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
          return connection.query('CALL `spGetDetailLoan`(?)', id);
        case 7:
          result = _context2.sent;
          if (!(result[0][0] === undefined)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Detalle de prestamo no encontrado."
          }));
        case 10:
          res.json(result[0]);
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getDetailLoan(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//* POST
var addDetailLoan = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, DESCRIPCION, COD_LIBRO, COD_ENC_PRESTAMO, MULTA, detail, connection;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body = req.body, DESCRIPCION = _req$body.DESCRIPCION, COD_LIBRO = _req$body.COD_LIBRO, COD_ENC_PRESTAMO = _req$body.COD_ENC_PRESTAMO, MULTA = _req$body.MULTA;
          detail = {
            DESCRIPCION: DESCRIPCION,
            COD_LIBRO: COD_LIBRO,
            COD_ENC_PRESTAMO: COD_ENC_PRESTAMO,
            MULTA: MULTA
          }; //Valida si los campos estan vacios o no 
          if (!(DESCRIPCION === undefined)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la descripcion."
          }));
        case 5:
          ;
          if (!(COD_LIBRO === undefined)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el codigo del libro."
          }));
        case 8:
          ;
          if (!(COD_ENC_PRESTAMO === undefined)) {
            _context3.next = 11;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el codigo del encabezado de prestamo."
          }));
        case 11:
          ;
          if (!(MULTA === undefined)) {
            _context3.next = 14;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la multa."
          }));
        case 14:
          ;
          _context3.next = 17;
          return (0, _database.getConnection)();
        case 17:
          connection = _context3.sent;
          _context3.next = 20;
          return connection.query("CALL spAddDetailLoan('".concat(detail.DESCRIPCION, "','").concat(detail.COD_LIBRO, "','").concat(detail.COD_ENC_PRESTAMO, "','").concat(detail.MULTA, "');"));
        case 20:
          res.json({
            message: "Detalle de prestamo agregado"
          });
          _context3.next = 31;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          _context3.t1 = _context3.t0.errno;
          _context3.next = _context3.t1 === 1062 ? 28 : _context3.t1 === 1060 ? 29 : 30;
          break;
        case 28:
          return _context3.abrupt("return", res.status(404).json({
            message: "Detalle ya agregado"
          }));
        case 29:
          return _context3.abrupt("return", res.status(404).json({
            message: "Detalle ya agregado"
          }));
        case 30:
          return _context3.abrupt("return", res.status(500).send(_context3.t0));
        case 31:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 23]]);
  }));
  return function addDetailLoan(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//* DELETE
var deleteDetailLoan = /*#__PURE__*/function () {
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
          return connection.query('CALL `spDeleteDetailLoan`(?)', id);
        case 7:
          result = _context4.sent;
          _context4.t0 = result.affectedRows;
          _context4.next = _context4.t0 === 0 ? 11 : _context4.t0 === 1 ? 12 : 13;
          break;
        case 11:
          return _context4.abrupt("return", res.status(404).json({
            message: "Detalle ya  eliminado"
          }));
        case 12:
          return _context4.abrupt("return", res.status(202).json({
            message: "Eliminado correctamente"
          }));
        case 13:
          return _context4.abrupt("return", res.status(500).json({
            message: "Error inteta de nuevo mas tarde"
          }));
        case 14:
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t1 = _context4["catch"](0);
          res.status(500).send(_context4.t1.message);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function deleteDetailLoan(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//* PUT
var updateDetailLoan = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, DESCRIPCION, COD_LIBRO, COD_ENC_PRESTAMO, MULTA, detail, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, DESCRIPCION = _req$body2.DESCRIPCION, COD_LIBRO = _req$body2.COD_LIBRO, COD_ENC_PRESTAMO = _req$body2.COD_ENC_PRESTAMO, MULTA = _req$body2.MULTA;
          detail = {
            DESCRIPCION: DESCRIPCION,
            COD_LIBRO: COD_LIBRO,
            COD_ENC_PRESTAMO: COD_ENC_PRESTAMO,
            MULTA: MULTA
          }; //Valida si los campos estan vacios o no 
          if (!(DESCRIPCION === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la descripcion."
          }));
        case 6:
          ;
          if (!(COD_LIBRO === undefined)) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el codigo del libro."
          }));
        case 9:
          ;
          if (!(COD_ENC_PRESTAMO === undefined)) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese el codigo del encabezado de prestamo."
          }));
        case 12:
          ;
          if (!(MULTA === undefined)) {
            _context5.next = 15;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Por favor ingrese la multa."
          }));
        case 15:
          ;
          _context5.next = 18;
          return (0, _database.getConnection)();
        case 18:
          connection = _context5.sent;
          _context5.next = 21;
          return connection.query("CALL spUpdateDetailLoan('".concat(id, "','").concat(detail.DESCRIPCION, "','").concat(detail.COD_LIBRO, "','").concat(detail.COD_ENC_PRESTAMO, "','").concat(detail.MULTA, "');"));
        case 21:
          result = _context5.sent;
          _context5.t0 = result.affectedRows;
          _context5.next = _context5.t0 === 0 ? 25 : _context5.t0 === 1 ? 26 : 27;
          break;
        case 25:
          return _context5.abrupt("return", res.status(404).json({
            message: "Sin ningun registro"
          }));
        case 26:
          return _context5.abrupt("return", res.status(202).json({
            message: "Actulizado"
          }));
        case 27:
          return _context5.abrupt("return", res.status(400).json({
            message: "Error , intenta de nuevo mas tarde"
          }));
        case 28:
          _context5.next = 37;
          break;
        case 30:
          _context5.prev = 30;
          _context5.t1 = _context5["catch"](0);
          _context5.t2 = _context5.t1.errno;
          _context5.next = _context5.t2 === 1062 ? 35 : 36;
          break;
        case 35:
          return _context5.abrupt("return", res.status(404).json({
            message: "Detalle ya agregado"
          }));
        case 36:
          return _context5.abrupt("return", res.status(500).send(_context5.t1.message));
        case 37:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 30]]);
  }));
  return function updateDetailLoan(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getDetailLoans: getDetailLoans,
  getDetailLoan: getDetailLoan,
  addDetailLoan: addDetailLoan,
  deleteDetailLoan: deleteDetailLoan,
  updateDetailLoan: updateDetailLoan
};
exports.methods = methods;