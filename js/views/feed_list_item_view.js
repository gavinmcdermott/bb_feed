var app = app || {};

app.FeedListItemView = Backbone.View.extend({

  tagName: "li",
  className: "feed-list-item",

  initialize: function() {
    this.listenTo(app, 'hideListItemViewDetail', this.render);
    this.parseTitle();
  },

  events: {
    'click': 'showListItemDetail'
  },

  template: _.template('<span class="title">{{this.parseTitle()}}</span>'),

  render: function() {
    $('.clicked').removeClass('clicked');
    return this.$el.html( this.template( this.model.attributes ));
  },

  parseTitle: function() {
    var title = this.model.attributes.title;
    var parsedTitle = title.match(/(?=\:\s)(.*)(?=\s\-)/)[0];
    return parsedTitle.slice(2);
  },

  showListItemDetail: function() {
    $('.clicked').removeClass('clicked');
    app.trigger('showListItemViewDetail', this.model);
    $(this.el).addClass('clicked');
  }
});