module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /app\/js\//,
        'libraries.js': /node_modules\//
      }
    },
    stylesheets: {
      joinTo: {
        'app.css': /app\/css\/|bootstrap.css/
      }
    },
    templates: {
      joinTo: {
        'templates.js': /app\/views\//
      }
    }
  },
  paths: {
    watched: ['app']
  },
  conventions: {
    ignored: /sprites\/.+\// 
  },
  npm: {
    globals: {
      jQuery: 'jquery',
      $: 'jquery',
      bootstrap: 'bootstrap',
    },
    styles: {
      bootstrap: ['dist/css/bootstrap.css'],
    },
  },
  plugins: {
    babel: {
      ignore: [/node_modules/]
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
    },
    sprites: {
      path: 'app/assets/images/sprites',
      destCSS: 'app/css/sprites.less',
      destSprites: 'public/images',
      cssFormat: 'less'
    }
  }
}