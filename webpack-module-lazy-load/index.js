// import {a, b} from './a.js';

// console.log(a);

require.ensure([], function () {
  const moduleA = require('./a.js')
  console.log(moduleA, 'moduleA')
}, 'chunkIndex')

import('./b.js').then((module) => {
  console.log(module, 99999)
})

export default 'index.js';