import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addGame(blueTeamPlayers, orangeTeamPlayers) {
      const match = this.get('match');
      this.get('addGame')(match.id, blueTeamPlayers, orangeTeamPlayers);
    }
  }
});
