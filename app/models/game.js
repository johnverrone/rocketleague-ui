import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  match: DS.belongsTo('match'),
  gameNumber: DS.attr('number'),
  gamePlayers: DS.hasMany('game-player'),

  blueTeamPlayers: Ember.computed.filterBy('gamePlayers', 'player.team.id', '2'),
  orangeTeamPlayers: Ember.computed.filterBy('gamePlayers', 'player.team.id', '1'),

  blueTeamGoals: Ember.computed.mapBy('blueTeamPlayers', 'goals'),
  blueTeamScore: Ember.computed.sum('blueTeamGoals'),

  orangeTeamGoals: Ember.computed.mapBy('orangeTeamPlayers', 'goals'),
  orangeTeamScore: Ember.computed.sum('orangeTeamGoals')
});
