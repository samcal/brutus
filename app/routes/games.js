import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{name: 'first game'}, {name: 'second game'}];
  }
});
