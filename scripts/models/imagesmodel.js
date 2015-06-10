var Image = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function() {
    return {
      url: '',
      content: '',
      username: 'austineady',
      created_at: new Date()
    };
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/austinpics'
});

export default {Image, ImageCollection};
