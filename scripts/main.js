require.config({
  paths: {
    'zepto': 'libs/zepto',
    'backbone': 'libs/backbone',
    'lodash': 'libs/lodash.underscore'
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

require(['lodash', 'backbone', 'zepto'], function (_, Backbone, $) {
  console.log('hello world');
});
