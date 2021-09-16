// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  /*
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  */
  plugins: [
    resolve(),
    commonjs(),
    json(),
  ]
};
