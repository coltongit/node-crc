import chai from 'chai';

import {
  crc5 as crc5mod,
  crc123gpp as crc123gpp_mod,
  crc32 as crc32mod,
  crc16kermit as crc16kermit_mod
} from '..';
import crc5src from '../crc5';
import crc5lib from '../lib/es6/crc5';
import crc123gpp_src from '../crc123gpp';
import crc123gpp_lib from '../lib/es6/crc123gpp';
import crc32src from '../crc32';
import crc32lib from '../lib/es6/crc32';
import crc16kermit_src from '../crc16kermit';
import crc16kermit_lib from '../lib/es6/crc16kermit';

chai.should();

describe('Module imports', () => {
  describe("Functions from a 'crc/src/' file behave the same as functions from the module", () => {
    it('crc32', () => {
      crc32mod('1234567890').should.equal(crc32src('1234567890'));
    });
    it('crc16kermit', () => {
      crc16kermit_mod('1234567890').should.equal(crc16kermit_src('1234567890'));
    });
    it('crc123gpp', () => {
      crc123gpp_mod('1234567890').should.equal(crc123gpp_src('1234567890'));
    });
    it('crc5', () => {
      crc5mod('1234567890').should.equal(crc5src('1234567890'));
    });
  });

  describe("Transpiled functions from 'crc/lib/foo' behave the same as module functions", () => {
    it('crc32', () => {
      crc32mod('1234567890').should.equal(crc32lib('1234567890'));
    });
    it('crc16kermit', () => {
      crc16kermit_mod('1234567890').should.equal(crc16kermit_lib('1234567890'));
    });
    it('crc123gpp', () => {
      crc123gpp_mod('1234567890').should.equal(crc123gpp_lib('1234567890'));
    });
    it('crc5', () => {
      crc5mod('1234567890').should.equal(crc5lib('1234567890'));
    });
  });
});