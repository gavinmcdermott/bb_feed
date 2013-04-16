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

  template: _.template('<span class="result-count">results {{this.showIdxStart}} - {{this.showIdxEnd}}</span>'),

  button_template: _.template(
      '<button class="showPrev btn">{{this.setPrevTitle()}}</button>'
      + '<button class="showNext btn">{{this.setNextTitle()}}</button><br />'
  ),

  show: function() {
    this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
  },

  showNext: function() {
    if (this.showIdxEnd < this.collection.length) {
      this.showIdxStart += this.step;
      this.showIdxEnd += this.step;
      this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
    }
    app.trigger('removeDetailView');
  },

  showPrev: function() {
    if (this.showIdxStart !== 0) {
      this.showIdxStart -= this.step;
      this.showIdxEnd -= this.step;
      this.visibleItems.reset(this.collection.models.slice(this.showIdxStart, this.showIdxEnd));
    }
    app.trigger('removeDetailView');
  },

  setPrevTitle: function() {
    if (this.showIdxStart === 0) {
      return '';
    } else {
      return 'previous 10';
    }
  },


  setNextTitle: function() {
    if (this.showIdxEnd < this.collection.length) {
      return 'next 10';
    } else {
      return '';
    }
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html( this.template() ).append(
      this.visibleItems.map(function(feedItem) {
        return new app.FeedListItemView({ model: feedItem }).render();
      })
    ).append( this.button_template() );

    return this.$el;
  }

});
