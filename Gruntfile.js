module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      build: {
        src: 'src/css/styles.scss',
        dest: 'build/css/styles.css'
      }
    }
  });



  // "Uglify" or Minify the JS
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // SASS to CSS compiler
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default tasks
  grunt.registerTask('default', ['uglify', 'sass']);

};
