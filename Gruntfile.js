module.exports = function(grunt) {

    grunt.initConfig({

    copy: {  
      fonts: {
        expand: true,
        cwd: 'bower_components/bootstrap/fonts/',
        src: '**',
        dest: 'dist/fonts/',
        flatten: true,
        filter: 'isFile',
      },
      templates: {
	expand: true,
	cwd: 'app/assets/templates',
	src: '**',
	dest: 'dist/templates/',
	flatten: true,
	filter: 'isFile',
      }
    },      
    less: {
        development: {
            options: {
              compress: true,
            },
            files: {
              "./dist/css/frontend.css":"./app/assets/stylesheets/frontend.less",
            }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
	  './bower_components/bootstrap-toggle/js/bootstrap-toggle.js',
	  './bower_components/isotope/dist/isotope.pkgd.min.js',
	  './bower_components/compare-versions/index.js',
	  './node_modules/css.escape/css.escape.js',
	  './bower_components/typeahead.js/dist/typeahead.jquery.js',
          './app/assets/javascript/searchit.js',
	  './app/assets/javascript/language_switching.js',
	  './app/assets/javascript/navigation.js',
          './app/assets/javascript/frontend.js'
        ],
        dest: './dist/js/frontend.js',
      },
      css_frontend: {
        src: [
	  './dist/css/frontend.css',
	  './bower_components/bootstrap-toggle/css/bootstrap-toggle.min.css',
	],
	dest: './dist/css/frontend.css',
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      frontend: {
        files: {
          './dist/js/frontend.js': './dist/js/frontend.js',
        }
      },
    },
    });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'less', 'concat', 'uglify']);
};
