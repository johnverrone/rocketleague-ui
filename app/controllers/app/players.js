import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['id:asc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    deletePlayer(id) {
      this.get('store').findRecord('player', id, { backgroundReload: false }).then(function(player) {
        player.destroyRecord().then(() => {}, () => {
          alert(`Can not delete player ${player.get('username')} due to game_player associations`);
        });
      });
    }
  }
});
