## Jest bug report #13686: structuredClone() fails with Map

https://github.com/facebook/jest/issues/13686

Using Jest 29.3.1 with Node.js 19.3.0

str.js:

```TypeScript
const map = new Map([['keyString', 'string']]);
console.log('is instanceof Map?', map instanceof Map);
const map2 = structuredClone(map);
console.log('is instanceof Map?', map2 instanceof Map);
```

str.test.js:

```TypeScript
test('str', () => {
  const map = new Map([['keyString', 'string']]);
  console.log('is instanceof Map?', map instanceof Map);
  const map2 = structuredClone(map);
  console.log('is instanceof Map?', map2 instanceof Map); // FAIL
});
```

```
$ node str.js

is instanceof Map? true
is instanceof Map? true
```

```
$ npm run test

> jest

  console.log
    is instanceof Map? true

      at Object.log (str.test.js:3:11)

  console.log
    is instanceof Map? false // FAIL

      at Object.log (str.test.js:5:11)
```
