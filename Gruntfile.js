module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    watch: {
      options: { 
        livereload:true,
      },
      js: {
        files: ['app/js/*.js'],
      },
      css: {
        files: ['app/css/*.css'],
      },
      html: {
        files: ['app/*.html'],
      },
      styles: { 
        files: ['app/saas/*.scss']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
