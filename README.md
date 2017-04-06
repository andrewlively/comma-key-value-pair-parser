Comma Separated Key-Value Pair Parser (cskvpp)
==============================================

```javascript

import cskvpp from 'cskvpp'

const tags = 'hello=world,abc=123'

const parsedTags = cskvpp.parse(tags)

console.log(parsedTags) // { hello: "world", abc: 123 }

```
