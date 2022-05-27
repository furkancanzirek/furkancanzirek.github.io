const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// vue.config.js for less-loader@6.0.0
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#fff',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
            'text-color':'#fff',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};