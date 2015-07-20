/**
 * Load required modules.
 */
var gulp = require('gulp'),
    config = require('./config.json'),
    download = require('gulp-download'),
    del = require('del');

/**
 * Default task for gulp.
 */
gulp.task('default', ['fetch']);

/**
 * Empty javascript and css directories.
 */
gulp.task('clean', function() {
   return del([config.scripts_path, config.styles_path]);
});

/**
 * Fetch javascript and css files combined.
 */
gulp.task('fetch', ['fetch:js', 'fetch:css']);

/**
 * Fetch on javascript files.
 */
gulp.task('fetch:js', function() {
    config.scripts_url = config.scripts_url.replace('{version}', config.version);

    for(var i = 0; i < config.scripts.length; i++){
        download(config.scripts_url + config.scripts[i])
            .pipe(gulp.dest(config.scripts_path));
    }

});

/**
 * Fetch only css files.
 */
gulp.task('fetch:css', function() {
    config.styles_url = config.styles_url.replace('{version}', config.version);

    for(var i = 0; i < config.styles.length; i++){
        download(config.styles_url + config.styles[i])
            .pipe(gulp.dest(config.styles_path));
    }
});