module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'library/css/style.css': 'library/scss/style.scss',
                }
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'library/css/style.css': 'library/scss/style.scss',
                }
            }
        },
        concat: {
            scripts: {
                src: [
                        'library/js/parts/start.js',
                        /* contenido extra */
                        'library/js/parts/owl.js',
                        /* google maps debe ser el último en cargar */
                        'library/js/parts/gmaps.js',
                        'library/js/parts/end.js'
                    ],
                dest: 'library/js/scripts.js'
            }
        },
        watch: {
            styles: {
                files: ['library/scss/style.scss', 'library/scss/*/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                },
            },
            scripts: {
                files: 'library/js/parts/*.js',
                tasks: ['concat'],
                options: {
                    livereload: true
                },
            },
            php: {
                files: ['*.php', '*/*.php'],
                options: {
                    livereload: true
                },
            },
        },
    });

    // Load the plugin that provides the task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('server', ['watch']);

};
