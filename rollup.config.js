import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'

export default {
  input: 'src/index.mjs',
  output: {
    file: 'dist/index.mjs',
    format: 'esm'
  },
  plugins: [
    resolve({
      module: false,
      main: true,
      extensions: ['.mjs', '.js', '.json']
    }),
    json()
  ]
}
