import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        username: this.get('username') ? this.get('username') : "Anonymous",
        category: this.get('category') ? this.get('category') : " ",
        title: this.get('title') ? this.get('title') : " ",
        body: this.get('body') ? this.get('body') : " ",
      };
      this.set('addNewQuestion', false);
      this.set('username', "");
      this.set('category', "");
      this.set('title', "");
      this.set('body', "");
      this.sendAction('saveQuestion', params);
    }
  }
});
