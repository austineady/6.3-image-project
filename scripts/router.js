import IndexView from './views/indexview';
import ImagesView from './views/imagesview';


import {UserCollection} from './models/usermodel';
import {ImageCollection} from './models/imagesmodel';



var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'images': 'images'
  },

  initialize: function() {
    this.users = new UserCollection();
    this.listenTo(this.users, 'add', function() {
      this.navigate('images', {trigger: true});
    }.bind(this));

    this.images = new ImageCollection();
  },

  index: function() {
    var view = new IndexView({collection: this.users});
    $('#app').html(view.el);
  },

  images: function() {
    var view = new ImagesView({
      collection: this.images,
      user: this.users.at(0)
    });
    $('#app').html(view.el);
    this.images.fetch();
  }

});

var router = new Router();

export default router;
