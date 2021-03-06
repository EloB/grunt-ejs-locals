module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    ejs: {
      all: {
        src: ['src/**/*.ejs', '!src/partials/**/*'],
        dest: 'dist/',
        expand: true,
        ext: '.html',
      },
    },
  });

  grunt.registerTask('default', ['ejs']);
};
