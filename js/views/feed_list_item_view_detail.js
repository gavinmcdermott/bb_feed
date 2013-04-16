var app = app || {};

app.FeedListItemViewDetail = Backbone.View.extend({

  initialize: function() {
    this.listenTo(app, 'showListItemViewDetail', this.render);
    this.listenTo(app, 'removeDetailView', this.removeView);
  },

  events: {
    'click .hide': 'removeView'
  },

  template: _.template(
      '<div class="item-view">'
        + '<h3>{{this.parseTitle()}}</h3>'
        + '<p class="item-content">{{content}}</p>'
      + '</div>'
      + '<button class="details hide btn">close</button>'
      + '<button class="details link btn"><a href="{{link}}">view on TED</a></button>'
  ),

  render: function(model) {
    this.model = model;
    this.$el.html( this.template( model.attributes ));
    this.$el.appendTo('.detail-view');
    return this;
  },

  removeView: function() {
    app.trigger('hideListItemViewDetail');
    this.$el.detach();
  },

  parseTitle: function() {
    var title = this.model.attributes.title;
    var parsedTitle = title.match(/(?!.*:){2}(?!\s).*/)[0];
    return parsedTitle;
  }

});