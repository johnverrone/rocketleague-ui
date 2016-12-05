import DS from 'ember-data';

export default DS.Model.extend({
  goals: DS.attr('number'),
  assists: DS.attr('number'),
  saves: DS.attr('number'),
  shots: DS.attr('number'),
  score: DS.attr('number'),
  mvp: DS.attr('boolean'),
  game: DS.belongsTo('game'),
  player: DS.belongsTo('player')
});
