var app = app || {};

app.FeedCollection = Backbone.Collection.extend({

  model: app.FeedItem,
  url: "http://feeds.feedburner.com/TEDTalks_video",

  initialize: function() {
    this.fetch();
  },

  fetch: function() {
    google.load("feeds", "1", {callback: this.getFeeds.bind(this)});
  },

  getFeeds: function() {
    var feed = new google.feeds.Feed("http://feeds.feedburner.com/TEDTalks_video");
    feed.includeHistoricalEntries();
    feed.setNumEntries(100);
    var load = function(result) {
      if(result.error) return;
      var res = [];
      for (var i = 0; i < result.feed.entries.length; i++) {
        // this.add( new app.FeedItem(result.feed.entries[i]) );
        res.push( new app.FeedItem(result.feed.entries[i]));
      }
      this.reset(res);
    };
    feed.load(load.bind(this));
  }
});