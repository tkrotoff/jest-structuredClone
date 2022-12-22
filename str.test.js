test('str', () => {
  const map = new Map([['keyString', 'string']]);
  console.log('is instanceof Map?', map instanceof Map);
  const map2 = structuredClone(map);
  console.log('is instanceof Map?', map2 instanceof Map);
});
