import DS from 'ember-data';

var Game = DS.Model.extend({
  name: DS.attr('string'),
  startTime: DS.attr('date'),
});

Game.reopenClass({
  FIXTURES: [
    {id: 1, name: 'first game'},
    {id: 2, name: 'game the second'}
  ]
});

export default Game;
