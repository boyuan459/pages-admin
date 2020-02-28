const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#00B4C4' }
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  // used to minimise bundle size by 500KB, no need after antd v4
  // function(config, env) {
  //   const alias = config.resolve.alias || {};
  //   alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, './src/icons.js');
  //   config.resolve.alias = alias;
  //   return config;
  // }
)
