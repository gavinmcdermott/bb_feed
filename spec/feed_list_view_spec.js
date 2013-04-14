describe("FeedListView", function() {

  beforeEach(function() {
    // put a spy on the prototype to listen for when it gets called
    spyOn(app.FeedCollection.prototype, 'fetch').andCallThrough();

    feedListView = app.feedListView = new app.FeedListView({
      collection: new app.FeedCollection()
      , el: '.feed-list'
    });

  });

  it("should make a call to Google API to populate the view's collection", function() {
    expect(app.feedListView.collection.fetch).toHaveBeenCalled();
  });

  it("should create an instance of FeedListView on instantiation", function() {
    expect((feedListView)instanceof app.FeedListView).toBeTruthy();
  });

});