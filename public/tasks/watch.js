module.exports = function(grunt){
    grunt.config('watch', {

        styles: {
            files: 'css/sass/**/*.sass',
            tasks: ['sass:dev','postcss:dev']
        },

    });
};
