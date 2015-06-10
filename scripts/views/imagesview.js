export default Backbone.View.extend({
  template: JST.images,

  events: {
    'submit .createimage': 'createimage',
    'click .showcreatebox': 'showcreatebox'
  },

  initialize: function(options) {
    this.username = options.user ? option.user.get('username') : 'austineady';
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  createimage: function(e) {
    e.preventDefault();
    var url = this.$('.uploadfile').val();
    var content = this.$('.imagemessage').val();
    console.log(url, content);
    this.collection.create({
      url: url,
      content: content,
      username: this.username
    });
    this.$('.showcreatebox').css('display', 'block');
    this.$('createimage').css('display', 'none');
  },

  showcreatebox: function(e) {
    this.$('.showcreatebox').css('display', 'none');
    this.$('.createimage').css('display', 'block');
  }
});
