module.exports = function(grunt) {

	grunt.initConfig({

		mochaTest : {
			test : {
				options : {
					ui : 'tdd',
					reporter : 'spec',
					reporterOptions: {'output' : 'mocha-test-output.xml'},
					timeout: 20000
				},
				src : [ './server-test.js' ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('test', [ 'mochaTest' ]);
};
