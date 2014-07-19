import DS from 'ember-data';

var Game = DS.Model.extend({
  name: DS.attr('string'),
  startTime: DS.attr('date'),
});

export default Game
