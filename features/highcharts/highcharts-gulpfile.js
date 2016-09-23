'use strict';

module.exports = function($gulp) {

  var rename = require('gulp-rename');

  $gulp.task('highcharts', function(done) {

    // Highcharts

    $gulp
      .src('node_modules/highcharts-release/highcharts.js')
      .pipe(rename('highcharts.min.js'))
      .pipe($gulp.dist('vendor/highcharts'))
      .on('end', function() {

        $gulp
          .src('node_modules/highcharts-release/highcharts.src.js')
          .pipe(rename('highcharts.js'))
          .pipe($gulp.dist('vendor/highcharts'))
          .on('end', function() {

            $gulp
              .src('node_modules/highcharts-release/modules/treemap.js')
              .pipe(rename('treemap.min.js'))
              .pipe($gulp.dist('vendor/highcharts'))
              .on('end', function() {

                $gulp
                  .src('node_modules/highcharts-release/modules/treemap.src.js')
                  .pipe(rename('treemap.js'))
                  .pipe($gulp.dist('vendor/highcharts'))
                  .on('end', done);

              });

          });

      });

  });

  return 'highcharts';
};
