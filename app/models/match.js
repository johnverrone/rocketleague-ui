import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  matchDate: DS.attr(),
  blueTeam: DS.belongsTo('team'),
  orangeTeam: DS.belongsTo('team'),
  weekNumber: DS.attr('number'),
  games: DS.hasMany('game'),
  gameSorting: ['gameNumber'],
  sortedGames: Ember.computed.sort('games', 'gameSorting')
});
