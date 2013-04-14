var app = app || {};

// The DOM element for a feed item...
app.FeedListItemView = Backbone.View.extend({

  tagName: "li",

  initialize: function() {

  },

  events: {
    'click': 'showListItemDetail'
  },

  template: _.template('{{title}}'),
  // template: _.template('YEPO'),

  render: function() {
    return this.$el.html( this.template( this.model.attributes ));
  },

  showListItemDetail: function() {
    app.trigger('showListItemViewDetail', this.model);
  }
});