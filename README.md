Comma Separated Key-Value Pair Parser (cskvpp)
==============================================

Small utility to stringify and parse comma separated key-value pairs

## Example
```javascript

import cskvpp from 'cskvpp'

const tags = 'hello=world,abc=123'

const parsedTags = cskvpp.parse(tags)

console.log(parsedTags) // { hello: "world", abc: 123 }

const stringified = cskvpp.stringify(parsedTags);

console.log(stringified); // "hello=world,abc=123"

```

## Example with override
```javascript

import cskvpp from 'cskvpp'

const tags = 'hello=world|abc=123'

const parsedTags = cskvpp.parse(tags, { separator: '|' })

console.log(parsedTags) // { hello: "world", abc: 123 }

const stringified = cskvpp.stringify(parsedTags, { joiner: '|' });

console.log(stringified); // "hello=world|abc=123"

```
