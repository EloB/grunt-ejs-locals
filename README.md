# grunt-ejs-locals v0.1.0

A Grunt task for compiling [ejs](http://npmjs.org/package/ejs) templates the taste of `layouts`, `blocks` and `partials`.

This Grunt plugin uses [randometc](https://github.com/RandomEtc/ejs-locals)/[ejs-locals](https://github.com/RandomEtc/ejs-locals).

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ejs-locals --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ejs-locals');
```

## EJS-locals task

@todo

## Usage Examples

Add the task to your config and specify the destination for the compiled file:

```javascript
grunt.initConfig({
  ejs: {
    all: {
      src: ['src/**/*.ejs', '!src/partials/**/*'],
      dest: 'dist/',
      expand: true,
      ext: '.html',
      options: {
        title: 'My awesome website'
      }
    },
  },
});
```

## Release History

* 0.1.0 initial release

## License

Copyright (c) 2014 Andreas Klein
Licensed under the MIT license.
