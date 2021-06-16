# mango-util
## 项目介绍
小早前端组件库

目前的进度是src/modules/date/index.js是一个关于日期格式化的文件，test/unit/specs/date.test.js则是对应的单元测试文件，rollup.config.js则是打包的配置文件，打包的输出是dist/mango_util.min.js

将工具包发到npm账号上我测试是发到自己的npm账号上的，正常应该建一个咱们项目组的账号，这部分工作还未进行

目前我个人只是写了个例子，跑一下流程，正常jest应该有一个配置文件（去包含所有的组件文件），rollup.config.js里的input选项应该包含src/modules下所有的.js文件，具体例子可以参考刘源发的文章

## 执行操作
npm run test 执行单元测试
npm run build_rollup 执行打包操作

