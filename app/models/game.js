import DS from 'ember-data';

var Game = DS.Model.extend({
  name: DS.attr('string'),
  startTime: DS.attr('date'),
  players: DS.hasMany('user')
});

Game.reopenClass({
  FIXTURES: [
    {id: 1, name: 'first game', players: [1, 2]},
    {id: 2, name: 'game the second', players: [1, 2, 3]}
  ]
});

export default Game;
