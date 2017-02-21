// packages 
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps');

// build all the JavaScript things
gulp.task('build', function () {
    var src = [
        './WorkoutWitness_UI/source/**/*.js',
        './WorkoutWitness_UI/source/**/*.jsx',
        './WorkoutWitness_UI/source/*.js',
        './WorkoutWitness_UI/source/*.jsx',
    ];

    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                'es2015',
                'react'
            ]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./wwwroot/build'));
});