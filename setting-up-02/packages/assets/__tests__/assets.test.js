'use strict';

const assets = require('..');
const assert = require('assert').strict;

assert.strictEqual(assets(), 'Hello from assets');
console.info('assets tests passed');
