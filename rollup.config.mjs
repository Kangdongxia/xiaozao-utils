import commonjs from "@rollup/plugin-commonjs";
// 将esm里的e6语法编译成es5, 插件是rollup和babel的结合
import babel from '@rollup/plugin-babel';
// 让 Rollup 找到外部模块
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import typescript from '@rollup/plugin-typescript';
// import requireContext from 'rollup-plugin-require-context';
export default [
  {
    input: 'src/modules/date/index.js',
    output: {
      name:'mango_util',
      file: 'dist/mango_util.min.cjs',
      format: 'cjs',
      plugins: [terser()]
    },
    plugins: [
      resolve(),
      // requireContext(),
      // typescript(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['lodash','mathjs']
  },
  {
    input: 'src/modules/date/index.js',
    output: {
      name:'mango_util',
      file: 'dist/mango_util.min.mjs',
      plugins: [terser()]
    },
    plugins: [
      resolve(),
      // requireContext(),
      // typescript(),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['lodash','mathjs']
  }
]
