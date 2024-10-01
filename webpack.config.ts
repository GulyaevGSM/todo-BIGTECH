import path from "path";
import {BuildEnv, BuildPaths} from "./config/types/types";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import webpack from "webpack";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
}

// return {
//     mode,
//     entry: './src/index.tsx',  // Ваш основной файл, содержащий import/export
//     output: {
//         filename: '[name].[contenthash].js',
//         path: path.resolve(__dirname, 'dist'),
//         clean: true,
//     },
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js'],  // Поддержка расширений
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.tsx?$/,  // Поддержка TypeScript
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: ['style-loader', 'css-loader'],  // Поддержка CSS
//             },
//         ],
//     },
//     target: 'web',
//     devServer: {
//         historyApiFallback: true,
//         open: true,
//         port: PORT,
//         hot: true,
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new HtmlWebpackPlugin({
//             template: './public/index.html',  // HTML шаблон
//         }),
//     ],
// }