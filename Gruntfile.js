module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      options: {
        spawn: false
      },
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass', 'postcss', 'bsReload:css']
      },
      js: {
        files: 'js/*.js',
        tasks: ['bsReload:js']
      },
      html: {
        files: '*.html',
        tasks: ['bsReload:all']
      }
    },

    sass: {
      options: {
        precision: 6,
        sourceComments: false
      },
      dist: {
        files: {
          'css/extra.css': 'scss/extra.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
        ]
      },
      dist: {
        files: {
          'css/extra.css': 'css/extra.css',
        }
      }
    },

    browserSync: {
      dev: {
        options: {
          server: "./",
          background: true
        }
      }
    },

    bsReload: {
      css: {
        reload: "style.css"
      },
      js: {
        reload: "main.js"
      },
      all: {
        reload: true
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  // Generate and format the CSS
  grunt.registerTask('default', ['browserSync', 'watch']);

};
