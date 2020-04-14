module.exports = () => ({
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        open: true,
        historyApiFallback: true,
    },
});
