import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    open() {
      this.set('isShowingModal', true);
    },

    close() {
      this.set('isShowingModal', false);
    },

    createMatch(blueTeamId, orangeTeamId, matchDate) {
      this.get('onCreate')(blueTeamId, orangeTeamId, matchDate);
    }  
  }
});
