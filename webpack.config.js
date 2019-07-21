const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {                        // webpack uses a regular expression to determine which files it should look for and serve to a specific loader. 
                                     // In this case any file that ends with .css will be served to the style-loader and the css-loader.
                test: /\.css$/,      
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                    {                                   //https://github.com/tcoopman/image-webpack-loader
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                              quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: false,
                            },
                            pngquant: {
                              quality: '65-90',
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            }
                        }
                    }
                ]
            },
        ]
    }
}