import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  team: DS.belongsTo('team'),
  gamePlayers: DS.hasMany('game-player'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
  
});
