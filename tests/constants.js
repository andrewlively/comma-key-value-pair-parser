const GOOD_COMMA_TAG_LIST = 'hello=world,test=123';
const GOOD_PIPE_TAG_LIST = 'hello=world|test=123';
const PARSED_GOOD_TAG_LIST = { hello: 'world', test: 123 };
const BAD_TAG_LIST_KEY_PAIR1 = 'hello=world,test';
const BAD_TAG_LIST_KEY_PAIR2 = 'hello=world,,test';

export { GOOD_COMMA_TAG_LIST, GOOD_PIPE_TAG_LIST, PARSED_GOOD_TAG_LIST, BAD_TAG_LIST_KEY_PAIR1, BAD_TAG_LIST_KEY_PAIR2 };
