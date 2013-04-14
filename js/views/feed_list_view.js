var app = app || {};

app.FeedListView = Backbone.View.extend({

  visibleItems: new Backbone.Collection(),
  step: 10,
  showIdxStart: 0,
  showIdxEnd: 10,

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.show);
    this.listenTo(this.visibleItems, 'reset', this.render);
  },

  events: {
    'click .showNext': 'showNext',
    'click .showPrev': 'showPrev'
  },

  template: _.template(
    '<div>'
      + '<button class="showPrev">show previous 10</button>'
      + '<button class="showNext">show next 10</button><br />'
      + 'results {{this.showIdxStart}} - {{this.showIdxEnd}}'
    + '</div>'),

  show: function() {
    this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
  },

  showNext: function() {
    if (this.showIdxEnd < this.collection.length) {
      this.showIdxStart += this.step;
      this.showIdxEnd += this.step;
      this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
    }
  },

  showPrev: function() {
    if (this.showIdxStart !== 0) {
      this.showIdxStart -= this.step;
      this.showIdxEnd -= this.step;
      this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
    }
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html( this.template() ).append(
      this.visibleItems.map(function(feedItem) {
        return new app.FeedListItemView({ model: feedItem }).render();
      })
    );

    return this.$el;
  }

});