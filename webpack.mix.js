let mix = require('laravel-mix')
const path = require('path')
require('./nova.mix')


mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/field.css', 'css')
  .nova('kostamilorava/nova-translatable-slug')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../vendor/laravel/nova/resources/js'),
            },
        },
    })
