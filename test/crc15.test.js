import crcSuiteFor from './test_helpers';
import crc15 from '../lib/es6/crc15';
import createBuffer from '../lib/es6/create_buffer';

describe('CRC15', function() {
  crcSuiteFor({ crc: crc15 });

  // https://github.com/alexgorbatchev/node-crc/issues/29 (carryover from crc16.test.js)
  crcSuiteFor({
    crc: crc15,
    value: createBuffer('AR0AAAGP2KJc/vg/AAAAErgGAK8dAAgLAQAAPpo=', 'base64').slice(0, 27),
  });
});
