const path = require('path')
const withSass = require("sass");

module.exports = withSass;
module.exports = {
    reactStrictMode: true,
}
module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.tsx', '.ts'],
        root: path.resolve(__dirname),
        alias: {
            '@': path.resolve(__dirname),
            '~': path.resolve(__dirname),
        },
    }
}

module.exports = {
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname
    }
}