module.exports = function(grunt) {

    grunt.initConfig({
        recess: {
            dist: {
                options: {
                    compile: true,
                    compress: true,
                },
                files: {
                    'public/assets/stylesheets/main.css':'src/less/custom.less'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/index.html':'src/index.html'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['recess']);
    grunt.registerTask('default', ['htmlmin']); 
}
