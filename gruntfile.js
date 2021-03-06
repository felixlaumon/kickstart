var path = require('path');

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
  "use strict";

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  var watchedFiles = ['jade/**/*.jade', 'styles/**/*.less', 'scripts/**/*.js'];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: ['scripts/libs/requirejs/require.js', 'tmp/app.js'],
        dest: 'dist/app.js'
      }
    },

    less: {
      development: {
        files: {
          'dist/app.css': 'styles/app.less'
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          'dist/app.min.css': 'styles/app.less'
        }
      }
    },

    jade: {
      development: {
        options: {
          pretty: true
        },
        files: {
          'index.html': ['jade/index.jade', 'jade/tmpl/*.jade']
        }
      },
      production: {
        options: {
          pretty: false
        },
        files: {
          'index.html': ['jade/index.jade', 'jade/tmpl/*.jade']
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          name: 'main',
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/main.js',
          out: 'tmp/app.js',
          optimize: 'none'
        }
      }
    },

    uglify: {
      dist: {
        src: ['scripts/libs/requirejs/require.js', 'tmp/app.js'],
        dest: 'dist/app.min.js'
      }
    },

    clean: ['tmp'],

    connect: {
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [
              require('connect-livereload')(),
              folderMount(connect, '.')
            ];
          }
        }
      }
    },

    watch: {
      scripts: {
        files: watchedFiles,
        tasks: ['default'],
        options: {
          livereload: true
        },
      },
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['jade:development', 'less:development']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('prod', ['clean', 'jade:production', 'less:production', 'requirejs', 'uglify']);
};
