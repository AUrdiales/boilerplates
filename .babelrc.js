module.exports = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-class-properties'],
    ignore: ['src/**/*.test.js', '**/*.test.js', '**.test.js'],
};
