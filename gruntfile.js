module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less : {
			production: {
				options: {
					compress: true,
					cleancss: true
				},
				files: {
					"public/css/style.css": "public/less/main.less"
				}
			}
		},
		uglify: {
			options : {
				compress : true
			},
			my_target: {
				files: {
					'public/js/main.js': ['public/js/src/plugins.js', 'public/js/src/scripts.js']
				}
			}
		},
		watch : {
			styles: {
				files: 'public/less/*.less',
				tasks: ['less']
			},
			scripts: {
				files: 'public/js/src/*.js',
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.registerTask('default', ['less']);

};


