var app = app || {};

app.FeedListItemViewDetail = Backbone.View.extend({

  className: 'detailView',

  initialize: function() {
    this.listenTo(app, 'showListItemViewDetail', this.render);
  },

  events: {
    'click .hideItemDetails': 'removeView'
  },

  template: _.template(
    '<div>'
      + '{{link}}<br />'
      + '{{title}}'
      + '<p>{{content}}</p>'
    + '</div>'
    + '<button class="hideItemDetails">close details</button>'
  ),

  render: function(model) {
    console.log(arguments);
    this.$el.html( this.template( model.attributes ));
    this.$el.appendTo('body');
    return this;
  },

  removeView: function() {
    this.$el.detach();
  }

});