module.exports = function(grunt){
    grunt.config('browserify', {

        dev: {
            files: {
                'js/bundle.js': ['js/app/application.js'],
            },
            options: {
                watch: true,
                keepAlive: true,
                transform: ['babelify'],
                browserifyOptions: {
                    debug: true
                }
            }
        },

        dist: {
            files: {
                'js/bundle.js': ['js/app/application.js'],
            },
            options: {
                transform: ['babelify']
            }
        }

    });
};
