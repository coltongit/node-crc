import crcSuiteFor from './test_helpers';
import crc5 from '../lib/es6/crc5';

describe('CRC5', function() {
  crcSuiteFor({ crc: crc5 });
});
