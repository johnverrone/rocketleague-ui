import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  team: DS.belongsTo('team')
});
