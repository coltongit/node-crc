import crcSuiteFor from './test_helpers';
import crc81wire from '../lib/es6/crc123gpp';

describe('CRC12 3GPP', function() {
  crcSuiteFor({ crc: crc123gpp });
});
