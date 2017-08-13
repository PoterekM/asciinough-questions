import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       name: this.get('name') ? this.get('name') : "Anonymous",
       level: this.get('level') ? this.get('level') : "unknown",
       answer: this.get('answer') ? this.get('answer') : " ",
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
