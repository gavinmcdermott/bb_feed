// (function(){
//   var numToShow = 10;
//   var numToFetch = 100;
//   results = [];
//   var curShowIdx = 0;

//   google.load("feeds", "1");

//   function initialize() {
//     var feed = new google.feeds.Feed("http://feeds.feedburner.com/TEDTalks_video");
//     feed.includeHistoricalEntries();
//     feed.setNumEntries(numToFetch);
//     feed.load(function(result) {
//       if(!result.error) {
//         for (var i = 0; i < result.feed.entries.length; i++) {
//           results.push(result.feed.entries[i]);
//           app.Feeds.add( new app.FeedItem(results[i]) );
//         }
//         showNumOfFeeds(numToShow, curShowIdx);
//         // console.log(results);
//         // console.log(app.Feeds);
//       }
//     });
//   }
//   google.setOnLoadCallback(initialize);

//   function showNumOfFeeds(numToShow, idx) {
//     var container = document.getElementById("results");
//     for (var i = idx; i < numToShow + idx; i++) {
//       var entry = results[i];
//       var result_div = document.createElement("div");
//       result_div.className = "result";
//       // result_div.appendChild(document.createTextNode(entry.title));
//       // container.appendChild(result_div);
//     }
//     // var br = document.createElement("hr");
//     // container.appendChild(br);
//     curShowIdx += numToShow;

//   }

//   document.getElementById("showMore")
//           .onclick = function() {
//             showNumOfFeeds(numToShow, curShowIdx);
//           };

// })();