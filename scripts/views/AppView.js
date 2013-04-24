define(['lodash', 'backbone', 'zepto'], function (_, Backbone, $) {
  var AppView = Backbone.View.extend({
    initialize: function () {
      console.log('Initialized AppView');
    }
  });
  return AppView;
});
