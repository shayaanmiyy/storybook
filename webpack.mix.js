const mix = require('laravel-mix');
const glob = require('glob');
const path = require('path');

mix.setPublicPath('dist');

mix.copy('assets/', 'dist/assets/', false);

// mix.browserSync('leaf-home-mapletree.ddev.site');

mix.options({
    processCssUrls: false,
});
mix.disableNotifications()
mix.copy('assets/', 'dist/assets/', false)

glob.sync('components/**/**/*.js').forEach((sourcePath) => {
    if (sourcePath.includes(".stories.js")) return;
    const destinationPath = sourcePath.replace(
        /^src\/(components\/.+)\/(.+)\.js$/,
        '$1/$2.js'
    );

    mix.js(sourcePath, destinationPath);
});

glob.sync('components/**/**/*.scss').forEach((sourcePath) => {
    const fileName = path.basename(sourcePath);
    const isPartial = fileName.startsWith('_');
    if (isPartial) return;

    const destinationPath = sourcePath.replace(
        /^components\/(.+)\.scss$/,
        'components/$1.css'
    );

    mix.sass(sourcePath, destinationPath)
        .sourceMaps(false, 'source-map');
});