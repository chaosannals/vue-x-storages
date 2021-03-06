const path = require('path');

module.exports = {
    entry: {
        'vue-x-storages': path.resolve(__dirname, 'source', 'all.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'target'),
        library: 'vue-x-storages',
        libraryTarget: 'commonjs2',
        libraryExport: 'default',
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        ['@babel/plugin-proposal-decorators', {
                            legacy: true
                        }],
                        '@babel/plugin-proposal-export-default-from',
                        '@babel/plugin-proposal-export-namespace-from',
                        '@babel/plugin-proposal-function-sent',
                        '@babel/plugin-proposal-json-strings',
                        '@babel/plugin-proposal-numeric-separator',
                        '@babel/plugin-proposal-throw-expressions',
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-syntax-import-meta',
                        '@babel/plugin-transform-modules-commonjs',
                        ['@babel/plugin-transform-runtime', {
                            corejs: false,
                            helpers: false,
                            regenerator: false,
                            useESModules: true,
                        }],
                    ],
                },
            }],
        }],
    },
};