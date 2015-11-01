module.exports = function(grunt){
    grunt.config('postcss', {

        dev: {
            options: {
                map: false,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer-core')({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'}),
                ]
            },
            files: {
                'css/app.css': 'css/app.css'
            }
        },
        dist: {
            options: {
                map: true,
                processors: [
                    require('pixrem')(),
                    require('autoprefixer-core')({browsers: '> 1%, last 2 versions, Firefox ESR, Opera 12.1'}),
                    require('cssnano')() // minify the result
                ]
            },
            files: {
                'css/app.css': 'css/app.css'
            }
        }

    });
};