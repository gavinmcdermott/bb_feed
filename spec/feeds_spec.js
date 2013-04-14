describe("Feeds", function() {

  beforeEach(function() {
    google.load("feeds", "1");
    feed = new google.feeds.Feed("http://feeds.feedburner.com/TEDTalks_video");
  });

  it("should have the correct URL on the feed object", function() {
    expect(feed.O).toBe("http://feeds.feedburner.com/TEDTalks_video");
  });

  it("should return JSON data", function() {
    expect(feed.m).toBe("json");
  });
});