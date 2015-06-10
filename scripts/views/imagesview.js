export default Backbone.View.extend({
  template: JST.images,

  events: {
    'submit .createimage': 'createimage'
  },

  initialize: function(options) {
    this.username = options.user ? option.user.get('username') : '';
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.JSON()));
  },

  createimage: function() {
    e.preventDefault();
    var url = this.$('.uploadfile').val();
    var content = this.$('.imagemessage').val();
    this.collection.create({
      url: url,
      content: content,
      username: this.username
    });
  }
});
