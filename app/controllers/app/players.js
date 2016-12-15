import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['id:asc'],
  sortedPlayers: Ember.computed.sort('model.players', 'sortProperties'),

  actions: {
    addPlayer(newPlayer) {
      this.get('store').findRecord('team', newPlayer.team).then(team => {
        let player = this.get('store').createRecord('player', {
          username: newPlayer.username,
          firstName: newPlayer.firstName,
          lastName: newPlayer.lastName,
          emailAddress: newPlayer.emailAddress,
          team: team
        });
        player.save();
      });
    },

    deletePlayer(id) {
      this.get('store').findRecord('player', id, { backgroundReload: false }).then(function(player) {
        player.destroyRecord().then(() => {}, () => {
          alert(`Can not delete player ${player.get('username')} due to game_player associations`);
        });
      });
    }
  }
});
