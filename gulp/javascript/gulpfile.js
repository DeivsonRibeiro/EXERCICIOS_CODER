const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function trasformacaoJS() {
    return gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false,
            presets: ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat("codigo.min2.js"))
        .pipe(gulp.dest("build2"));
}

function fim(cb) {
    console.log("Fim!!!")
    return cb()
}

exports.default = series(trasformacaoJS,fim);
