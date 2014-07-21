import Ember from 'ember';

export default Ember.Controller.extend({
  name: "",
  startTime: "",

  actions: {
    createGame: function() {
      var game = this.store.createRecord("game", {
        name: this.get("name")
      });

      game.save();
      this.set("name", "");
      this.transitionToRoute("/games");
    }
  }
});
