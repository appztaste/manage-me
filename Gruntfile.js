module.exports = function(grunt) {

  grunt.initConfig({

    pkg:  grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        files: {
          'application.min.js': ['app/index.js', 'app/js/app.js', 'app/js/*/*']
        }
      }
    },

    cssmin: {
      target: {
          files: {
            'application.min.css': ['app/css/style.css']
          }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);

  
};