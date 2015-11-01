module.exports = function(grunt){
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.file.setBase('public/');
    grunt.loadTasks('tasks');    
};