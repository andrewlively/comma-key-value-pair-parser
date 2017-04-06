function stringToNum(str) {
  return isNaN(str) ? str : parseFloat(str);
}

export function parse(input) {
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