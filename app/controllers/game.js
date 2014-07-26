import Ember from 'ember';


export default Ember.Controller.extend({
  hasStarted: function() {
    return false;
  }.property(),

  inGame: function() {
    return false;
  }.property(),

  isCreator: function() {
    return false;
  }.property(),

  timer: function() {
    return "00:13:24.22";
  }.property(),

  startDate: function() {
    return new Date("July 20, 2014 12:00:00");
  }.property()
});
