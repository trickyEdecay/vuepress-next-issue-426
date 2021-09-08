const { path } = require('@vuepress/utils')

const testPlugin = (options, app) => {

    return {
        name: 'vuepress-plugin-test',
        clientAppEnhanceFiles: path.resolve(
            __dirname,
            './clientAppEnhance.js'
        )
    }
}
module.exports = testPlugin
