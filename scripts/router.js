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
  },

  index: function() {
    var view = new IndexView({collection: this.users});
    $('#app').html(view.el);
  },

  images: function() {
    var view = new ImagesView({});
    $('#app').html(view.el);
  }

});

var router = new Router();

export default router;
