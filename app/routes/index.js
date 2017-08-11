import Ember from 'ember';

  var questions = [{
    id: 1,
    username: "user",
    category: "category",
    title: "title",
    body: "body"
  }, {
    id: 2,
    username: "xoxCodingCutie",
    category: "Typing",
    title: "How do I type?",
    body: "When I move my fingers nothing happens"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
