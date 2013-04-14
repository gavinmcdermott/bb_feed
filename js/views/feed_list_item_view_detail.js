var app = app || {};

app.FeedListItemViewDetail = Backbone.View.extend({

  className: 'detailView',

  initialize: function() {
    this.listenTo(app, 'showListItemViewDetail', this.render);
  },

  template: _.template('<div>{{link}}</div>'),

  render: function(model) {
    console.log(arguments);
    this.$el.html( this.template( model.attributes ));
    this.$el.appendTo('body');
    return this;
  }

});