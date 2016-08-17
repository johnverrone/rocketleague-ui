import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    openModal() {
      this.set('modalIsOpen', true);
    },

    closeModal() {
      this.set('modalIsOpen', false);
    },

    submit() {
      const blueTeam = this.get('blueTeam');
      const orangeTeam = this.get('orangeTeam');
      const matchDate = this.get('matchDate');
      this.get('onCreate')(blueTeam, orangeTeam, matchDate);
      this.set('modalIsOpen', false);
    }
  }
});
