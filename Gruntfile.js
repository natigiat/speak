module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  wiredep: {
   
    task: {
      src: [
        'index.php',   // .html support... 
      ],
    }
  }








  });

 




  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['wiredep']);

};