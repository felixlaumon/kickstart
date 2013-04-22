require.config({
  // No need to add .js to paths
  paths: {
    'zepto': 'libs/zepto/zepto',
    'backbone': 'libs/backbone/backbone',
    'lodash': 'libs/lodash/dist/lodash.backbone'
  },
  shim: {
    zepto: {
      exports: '$'
    },
    lodash: {
      exports: '_'
    },
    backbone: {
      deps: ['lodash', 'zepto'],
      exports: 'Backbone'
    }
  }
});

require(['views/AppView'], function (AppView) {
  window.app = new AppView();
});
