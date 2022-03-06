const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

    mix.override(config => {
        // Apply a workaround caused by Laravel Mix using the `webpack-dev-server@v4.0.0-beta`:
        // https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-beta.3.
        // Basically the `dev` property has been deprecated in favor of `devMiddleware`.
        if (config.devServer) {
            config.devServer.devMiddleware = config.devServer.dev;
            delete config.devServer.dev;
        }
    });
