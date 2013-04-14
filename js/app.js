var app = app || {};
_.extend(app, Backbone.Events);

_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};


$(function() {

  app.feedListView = new app.FeedListView({
    collection: new app.FeedCollection()
    , el: '.feed-list'
  });
  app.feedListItemView = new app.FeedListItemViewDetail();

});