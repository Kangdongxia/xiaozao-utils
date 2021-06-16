// import resolve from 'rollup-plugin-node-resolve';
// import json from 'rollup-plugin-json';
// import commonjs from "rollup-plugin-commonjs";
// import babel from 'rollup-plugin-babel';
// import requireContext from 'rollup-plugin-require-context';

/* format:
  cjs: node.js 环境
  iife: 浏览器环境
  umd: 兼容环境, 同时支持 node.js 和浏览器
 */
export default {
  input: 'src/modules/date/index.js',
  format: 'umd',
  output: {
    name:'mango_util',
    file: 'dist/mango_util.min.js',
    format: 'umd',
  },
  plugins: [
    // resolve(),
    // requireContext(),
    // commonjs(),
  ]
}
