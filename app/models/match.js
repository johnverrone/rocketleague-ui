import DS from 'ember-data';

export default DS.Model.extend({
  matchDate: DS.attr(),
  blueTeam: DS.belongsTo('team'),
  orangeTeam: DS.belongsTo('team')
});
