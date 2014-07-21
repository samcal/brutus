import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newGame: function() {
      this.transitionToRoute('/games/new');
    }
  }
});
