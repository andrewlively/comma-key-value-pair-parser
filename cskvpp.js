function stringToNum(str) {
  return isNaN(str) ? str : parseFloat(str);
}

export function parse(input = '') {
  const inputIsString = typeof input === 'string';
  const tags = {};

  if (!input && inputIsString) {
    return tags;
  }

  if (!inputIsString) {
    throw new Error('Input should only be a string');
  }

  input.split(',').forEach(function(tag) {
    if ((tag.match(/=/g) || []).length !== 1) {
      throw new Error('Invalid tag list provided');
    }

    var split = tag.split('=');

    tags[split[0]] = stringToNum(split[1]);
  });

  return tags;
};

export function stringify(input = {}) {
  const inputIsObject = Object.prototype.toString.call(input) === '[object Object]';

  if (!inputIsObject) {
    throw new Error('Input should only be a string');
  }

  const tags = [];

  for (let key in input) {
    const value = input[key].toString();

    tags.push(`${ key }=${ value }`);
  }

  return tags.join(',');
};

export default { parse, stringify };
