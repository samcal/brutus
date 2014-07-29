import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  games: DS.hasMany('game', { async: true })
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'brutus',
      games: [1, 2]
    },
    {
      id: 2,
      name: 'oswald',
      games: [1, 2]
    },
    {
      id: 3,
      name: 'booth',
      games: [2]
    }
  ]
});

export default User;
