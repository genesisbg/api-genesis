"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = _interopRequireDefault(require("../db/database"));
// interacciones con la base de datos

//! GET
var getimagebooks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database["default"])();
        case 3:
          connection = _context.sent;
          _context.next = 6;
          return connection.query("CALL spGetAllImageBooks()");
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
  return function getimagebooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
// const result = await connection.query('CALL `spGetAllImageBooks`()'); // GET = SELECT

var getimagebook = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log(req.params);
          id = req.params.id;
          _context2.next = 5;
          return (0, _database["default"])();
        case 5:
          connection = _context2.sent;
          _context2.next = 8;
          return connection.query('CALL `spGetImageBook`(?)', id);
        case 8:
          result = _context2.sent;
          // GET = SELECT

          res.json(result[0]);
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function getimagebook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//! POST
var addimagebook = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var NOMBRE, image, connection, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          NOMBRE = req.body.NOMBRE;
          if (!(NOMBRE === undefined)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            message: "Bad request. Please fill all field."
          }));
        case 4:
          image = {
            NOMBRE: NOMBRE
          };
          _context3.next = 7;
          return (0, _database["default"])();
        case 7:
          connection = _context3.sent;
          _context3.next = 10;
          return connection.query("CALL spAddImageBook('".concat(NOMBRE, "');"));
        case 10:
          result = _context3.sent;
          // res.json(result); //* Ver informacion completa de la consulta
          res.json({
            message: " Added"
          });
          _context3.next = 18;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send(_context3.t0);
          console.log(_context3.t0);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return function addimagebook(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//! DELETE
var deleteimagebook = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(req.params);
          id = req.params.id;
          _context4.next = 5;
          return (0, _database["default"])();
        case 5:
          connection = _context4.sent;
          _context4.next = 8;
          return connection.query('CALL `spDeleteImageBook`(?)', id);
        case 8:
          result = _context4.sent;
          res.json(result);
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          res.status(500).send(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function deleteimagebook(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//! PUT
var updateimagebook = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, NOMBRE, image, connection, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          NOMBRE = req.body.NOMBRE;
          image = {
            NOMBRE: NOMBRE
          };
          if (!(NOMBRE === undefined)) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(400).json({
            message: "Bad request. Please fill all field."
          }));
        case 6:
          _context5.next = 8;
          return (0, _database["default"])();
        case 8:
          connection = _context5.sent;
          _context5.next = 11;
          return connection.query("CALL spUpdateImageBook('".concat(id, "', '").concat(NOMBRE, "');"));
        case 11:
          result = _context5.sent;
          res.json(result);
          _context5.next = 18;
          break;
        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](0);
          res.status(500).send(_context5.t0);
        case 18:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 15]]);
  }));
  return function updateimagebook(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getimagebooks: getimagebooks,
  getimagebook: getimagebook,
  addimagebook: addimagebook,
  deleteimagebook: deleteimagebook,
  updateimagebook: updateimagebook
};
exports.methods = methods;