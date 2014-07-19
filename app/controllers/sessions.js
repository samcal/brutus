import Ember from 'ember';

export default Ember.Controller.extend({
  name: "",
  password: "",

  actions: {
    login: function() {
      if (this.get('name') == 'brutus' && this.get('password') == 'brutus') {
        this.transitionToRoute('/games');
      } else {
        alert('bad credentials');
      }
    }
  }
});
