function myselfPlugin() {}

myselfPlugin.prototype.apply = function(compiler) {
    compiler.plugin('run', function(compiler, callback) {
        console.log('webpack 开始构建');
        callback();
    })
}

module.exports = myselfPlugin;