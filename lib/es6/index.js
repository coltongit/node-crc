'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crcjam = exports.crc32 = exports.crc24 = exports.crc16kermit = exports.crc16xmodem = exports.crc16modbus = exports.crc16ccitt = exports.crc16 = exports.crc15 = exports.crc123gpp = exports.crc81wire = exports.crc8 = exports.crc5 = exports.crc1 = undefined;

var _crc = require('./crc1');

var _crc2 = _interopRequireDefault(_crc);

var _crc3 = require('./crc5');

var _crc4 = _interopRequireDefault(_crc3);

var _crc5 = require('./crc8');

var _crc6 = _interopRequireDefault(_crc5);

var _crc81wire = require('./crc81wire');

var _crc81wire2 = _interopRequireDefault(_crc81wire);

var _crc123gpp = require('./crc123gpp');

var _crc123gpp2 = _interopRequireDefault(_crc123gpp);

var _crc7 = require('./crc15');

var _crc8 = _interopRequireDefault(_crc7);

var _crc9 = require('./crc16');

var _crc10 = _interopRequireDefault(_crc9);

var _crc16ccitt = require('./crc16ccitt');

var _crc16ccitt2 = _interopRequireDefault(_crc16ccitt);

var _crc16modbus = require('./crc16modbus');

var _crc16modbus2 = _interopRequireDefault(_crc16modbus);

var _crc16xmodem = require('./crc16xmodem');

var _crc16xmodem2 = _interopRequireDefault(_crc16xmodem);

var _crc16kermit = require('./crc16kermit');

var _crc16kermit2 = _interopRequireDefault(_crc16kermit);

var _crc11 = require('./crc24');

var _crc12 = _interopRequireDefault(_crc11);

var _crc13 = require('./crc32');

var _crc14 = _interopRequireDefault(_crc13);

var _crcjam = require('./crcjam');

var _crcjam2 = _interopRequireDefault(_crcjam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.crc1 = _crc2.default;
//import crc64 from './crc64';

exports.crc5 = _crc4.default;
exports.crc8 = _crc6.default;
exports.crc81wire = _crc81wire2.default;
exports.crc123gpp = _crc123gpp2.default;
exports.crc15 = _crc8.default;
exports.crc16 = _crc10.default;
exports.crc16ccitt = _crc16ccitt2.default;
exports.crc16modbus = _crc16modbus2.default;
exports.crc16xmodem = _crc16xmodem2.default;
exports.crc16kermit = _crc16kermit2.default;
exports.crc24 = _crc12.default;
exports.crc32 = _crc14.default;
//export { crc64 };

exports.crcjam = _crcjam2.default;
exports.default = {
  crc1: _crc2.default,
  crc5: _crc4.default,
  crc8: _crc6.default,
  crc81wire: _crc81wire2.default,
  crc123gpp: _crc123gpp2.default,
  crc15: _crc8.default,
  crc16: _crc10.default,
  crc16ccitt: _crc16ccitt2.default,
  crc16modbus: _crc16modbus2.default,
  crc16xmodem: _crc16xmodem2.default,
  crc16kermit: _crc16kermit2.default,
  crc24: _crc12.default,
  crc32: _crc14.default,
  //crc64,
  crcjam: _crcjam2.default
};