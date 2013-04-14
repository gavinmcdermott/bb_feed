var app = app || {};

app.FeedListItemView = Backbone.View.extend({

  tagName: "li",

  initialize: function() {

  },

  events: {
    'click': 'showListItemDetail'
  },

  template: _.template('{{title}}'),

  render: function() {
    return this.$el.html( this.template( this.model.attributes ));
  },

  showListItemDetail: function() {
    app.trigger('showListItemViewDetail', this.model);
  }
});