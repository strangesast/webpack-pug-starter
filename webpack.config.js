module.exports = process.env.NODE_ENV !== 'production' ? require('./webpack.config.dev.js') : require('./webpack.config.prod.js');
