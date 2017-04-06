import { GOOD_TAG_LIST, PARSED_GOOD_TAG_LIST, BAD_TAG_LIST_KEY_PAIR1, BAD_TAG_LIST_KEY_PAIR2 } from './constants.js'
import cskvpp from '../cskvpp.js'

describe('base tests', function() {
  it('should stringify object to comma separated key value pair', function () {
    const stringified = cskvpp.stringify(PARSED_GOOD_TAG_LIST);

    expect(stringified).toMatch(GOOD_TAG_LIST);
  });
});

describe('allowed data types', function() {
  it('should not allow number input', function() {
    expect(function() {
      cskvpp.stringify(123);
    }).toThrowError('Input should only be a string');
  });

  it('should not allow array input', function() {
    expect(function() {
      cskvpp.stringify([]);
    }).toThrowError('Input should only be a string');
  });

  it('should not allow function input', function() {
    expect(function() {
      cskvpp.stringify(function() {});
    }).toThrowError('Input should only be a string');
  });
  
  it('should not allow string input', function() {
    expect(function() {
      cskvpp.stringify(GOOD_TAG_LIST);
    }).toThrowError('Input should only be a string');
  });
});
