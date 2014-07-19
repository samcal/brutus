import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newGame: function() {
      this.transitionToRoute('/games/new');
    }
  }
});
