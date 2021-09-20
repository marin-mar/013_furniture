const project_folder = "build";
// const project_folder = require("path").basename(__dirname); // rename build
const source_folder = "src";
const fs = require("fs");

const path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
    json: project_folder + "/json/",
    video: project_folder + "/video/",
    php: project_folder + "/php/",
    svg: project_folder + "/svg/",
  },
  src: {
    html: source_folder + "/html/*.html",
    css: [source_folder + "/scss/main.scss", source_folder + "/scss/libs.scss"],
    js: [source_folder + "/js/main.js", source_folder + "/js/libs.js"],
    img: source_folder + "/img/**/*",
    fonts: source_folder + "/fonts/**/*",
    json: source_folder + "/json/*.json",
    video: source_folder + "/video/**/*",
    php: source_folder + "/php/**/*",
    svg: source_folder + "/svg/**/*",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/**/*.scss",
    js: source_folder + "/**/*.js",
    img: source_folder + "/img/**/*",
    fonts: source_folder + "/fonts/**/*",
    json: source_folder + "/json/*.json",
    video: source_folder + "/video/**/*",
    php: source_folder + "/php/**/*",
    svg: source_folder + "/svg/**/*",
  },
  clean: "./" + project_folder + "/",
};

const { src, dest } = require("gulp");
const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");
const del = require("del");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const groupmedia = require("gulp-group-css-media-queries");
const cleanCss = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const jpegrecompress = require("imagemin-jpeg-recompress");
const webp = require("gulp-webp");
const webphtml = require("gulp-webp-html");
const webpcss = require("gulp-webpcss");
const svgmin = require("gulp-svgmin");
const svgsprite = require("gulp-svg-sprite");
const svgcsspseudo = require("gulp-svg-css-pseudo");
const ttf2woff = require("gulp-ttf2woff");
const ttf2woff2 = require("gulp-ttf2woff2");
const fonter = require("gulp-fonter");
const htmlmin = require("gulp-htmlmin");
const plumber = require("gulp-plumber");

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3000,
    notify: false,
    browser: "chrome",
  });
};

const html = () => {
  src(path.src.html)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(
      rename({
        extname: ".expanded.html",
      })
    )
    .pipe(dest(path.build.html));
  return src(path.src.html)
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
};

const css = () => {
  return src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(groupmedia())
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 5 versions"],
        cascade: false,
      })
    )
    .pipe(webpcss())
    .pipe(sourcemaps.write())
    .pipe(dest(path.build.css))
    .pipe(
      cleanCss({
        level: 2,
      })
    )
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
};

const js = () => {
  return src(path.src.js)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(fileinclude())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
};

const img = () => {
  return src(path.src.img)
    .pipe(webp({ quality: 70 }))
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin(
        {
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        },
        [
          jpegrecompress({
            loops: 6,
            min: 50,
            max: 90,
            quality: "high",
            use: [
              pngquant({
                quality: [0.8, 1],
                strip: true,
                speed: 1,
              }),
            ],
          }),
          imagemin.gifsicle(),
          imagemin.optipng(),
          imagemin.svgo(),
        ]
      )
    )
    .pipe(dest(path.build.img))
    .pipe(browserSync.reload({ stream: true }));
};

const svg2sprite = () => {
  if (path.src.svg) {
    return src(path.src.svg).pipe(plumber()).pipe(svgmin()).pipe(svgsprite()).pipe(dest(path.build.svg));
  } else {
    console.log("No svg in this project");
  }
};

const svg2css = () => {
  return src([source_folder + "/sprite/*.svg"])
    .pipe(svgmin())
    .pipe(
      svgcsspseudo({
        fileName: "_svg",
        fileExt: "scss",
        cssPrefix: "--svg__",
        addSize: false,
      })
    )
    .pipe(dest(path.build.img));
};

const fonts = () => {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
};

const otf2ttf = () => {
  return src([source_folder + "/fonts/*.otf"])
    .pipe(fonter({ formats: ["ttf"] }))
    .pipe(dest(source_folder + "/fonts/"));
};

function fontsStyle() {
  let file_content = fs.readFileSync(source_folder + "/scss/_fonts.scss");
  if (file_content == "") {
    fs.writeFile(source_folder + "/scss/_fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              source_folder + "/scss/_fonts.scss",
              '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}

function json() {
  if (path.src.json) {
    return src(path.src.json).pipe(plumber()).pipe(dest(path.build.json));
  } else {
    console.log("No json in this project");
  }
}

function video() {
  if (path.src.json) {
    return src(path.src.video).pipe(dest(path.build.video));
  } else {
    console.log("No video in this project");
  }
}

const php = () => {
  if (path.src.php) {
    return src(path.src.php)
      .pipe(plumber())
      .pipe(fileinclude())
      .pipe(dest(path.build.php))
      .pipe(browserSync.reload({ stream: true }));
  } else {
    console.log("No php in this project");
  }
};

const watchFiles = () => {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], img);
  gulp.watch([path.watch.fonts], fonts);
  gulp.watch([path.watch.json], json);
  gulp.watch([path.watch.video], video);
  gulp.watch([path.watch.php], php);
};

const clean = () => {
  return del(path.clean);
};

const build = gulp.series(clean, gulp.parallel(html, css, js, json, video, img, fonts, php));
const watch = gulp.parallel(build, fontsStyle, watchFiles, server);

exports.html = html;
exports.css = css;
exports.js = js;
exports.img = img;
exports.fonts = fonts;
exports.json = json;
exports.video = video;
exports.php = php;
exports.clean = clean;
exports.fontsStyle = fontsStyle;
exports.watchFiles = watchFiles;

exports.svg2sprite = svg2sprite;
exports.svg2css = svg2css;
exports.otf2ttf = otf2ttf;

exports.build = build;
exports.watch = watch;
exports.default = watch;
