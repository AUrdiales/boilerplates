const TerserJSPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => ({
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
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
    devtool: 'cheap-source-map',
    plugins: [new CleanWebpackPlugin(), new CopyPlugin([{ from: 'src/server.js', to: './' }])],
    optimization: {
        minimizer: [new TerserJSPlugin({ extractComments: false })],
    },
});
