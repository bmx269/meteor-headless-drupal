/*****************************************************************************/
/* Events Publish Functions
  */
/*****************************************************************************/

Meteor.publish('events', function(query) {
  var self = this;
  try {
    var response = HTTP.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query
      }
    });

    _.each(response.data.items, function(item) {
      var doc = {
        thumb: item.volumeInfo.imageLinks.smallThumbnail,
        title: item.volumeInfo.title,
        link: item.volumeInfo.infoLink,
        snippet: item.searchInfo && item.searchInfo.textSnippet
      };

      self.added('books', Random.id(), doc);
    });

    self.ready();

  } catch(error) {
    console.log(error);
  }
});