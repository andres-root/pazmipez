'use-strict';

/**
 * Global Gulp variables
 */
module.exports = {
  paths: {
    //Sources
    src: './src/',
    //Cache
    sassCache: './.sass-cache/',
    //Javascript
    mainJSFile: './src/js/Main.js',
    srcJS: './src/js/**/*',
    srcJSComponents: './src/js/components/',
    //Styles
    srcSASSFile: './src/styles/sass/main.scss',
    srcSASS: './src/styles/sass/',
    //Destinations
    dist: './dist/',
    distJS: './dist/js/',
    distCSS: './dist/css/',
    root: './',
  },
  extensions: {
    images: '*.{gif,jpg,jpeg,png}',
    icons: '*.svg',
    videos: '*.{mp4,mov,ogv,mpg}',
    html: '*.html',
    all720: '*.{html,jpg,jpeg,js,xml,swf}',
    js: '*.js',
    css: '*.{css,map}',
    fonts: '*.{ttf,woff2,woff,svg,eot}',
    sass: '*.{sass,scss}',
    tag: '*.{tag,js,json}',
    hbs: '*.{js,html,hbs,json}'
  },
  server: {
    port: 8080,
    host: 'localhost',
    defaultPage: 'index.html'
  },
  gjslint: {
    flags: [
      '--max_line_length 125'
    ]
  }
};
