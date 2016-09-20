/* eslint no-console:0 */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');
const proxy = require('../devproxy.config');

const listen = process.argv[2];
let APP_HOST = '0.0.0.0';
let APP_PORT = 20002;
if (listen && listen !== '') {
    if (listen.indexOf(':')) {
        [APP_HOST, APP_PORT] = listen.split(':');
    } else if (`${parseInt(listen, 10)}` === `${listen}`) {
        APP_PORT = listen;
    } else {
        APP_HOST = listen;
    }
}

webpackConfig.entry.app.unshift(`webpack-dev-server/client?http://${APP_HOST}:${APP_PORT}/`);
console.log('Inserted WebPack Dev Helper\n');

const compiler = webpack(webpackConfig);
const app = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../public/'),
    stats: { colors: true },
    proxy,
});

app.listen(APP_PORT, APP_HOST, () => {
    console.log(`App is now running on http://${APP_HOST}:${APP_PORT}\n`);
});
