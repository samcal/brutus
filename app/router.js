import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BrutusENV.locationType
});

Router.map(function() {
  this.resource("sessions");
  this.resource("games", function() {
    this.route("new");
  });
  this.resource("game", { path: "/games/:game_id" });
  this.route('game');
});

export default Router;
