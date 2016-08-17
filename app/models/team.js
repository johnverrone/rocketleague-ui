import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  wins: DS.attr(),
  loses: DS.attr(),
  players: DS.hasMany('player'),
  blueMatches: DS.hasMany('match', {inverse: 'blueTeam'}),
  orangeMatches: DS.hasMany('match', {inverse: 'orangeTeam'})
});
