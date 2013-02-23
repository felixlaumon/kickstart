module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['scripts/require.js', 'tmp/app.js'],
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
    watch:{
      files:['jade/**/*.jade', 'styles/**/*.less', 'scripts/**/*.js'],
      tasks:['default', 'reload']
    },
    reload: {
      port: 6001,
      proxy: {
        host: 'localhost',
        port: 7000
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
        src: ['scripts/require.js', 'tmp/app.js'],
        dest: 'dist/app.min.js'
      }
    },
    clean: ['tmp']
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-reload');

  // Default task(s).
  grunt.registerTask('default', ['jade:development', 'less:development']);
  grunt.registerTask('prod', ['clean', 'jade:production', 'less:production', 'requirejs', 'uglify']);
};
