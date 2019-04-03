import crcSuiteFor from './test_helpers';
import crc1 from '../lib/es6/crc1';

describe('CRC1', function () {
  crcSuiteFor({
    crc: crc1
  });
});