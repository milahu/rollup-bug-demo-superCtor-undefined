// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,

    // remove hashes from filenames
    entryFileNames: `[name].js`,
    chunkFileNames: `assets/[name].js`,
    assetFileNames: `assets/[name].[ext]`,

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
/*
without json:
[!] Error: 'default' is not exported by node_modules/ci-info/vendors.json,
imported by node_modules/ci-info/vendors.json?commonjs-proxy
*/
  ]
};
