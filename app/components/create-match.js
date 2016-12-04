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
      const matchDate = new Date(this.get('matchDate'));
      const weekNumber = this.get('weekNumber');
      this.get('onCreate')(blueTeam, orangeTeam, matchDate, weekNumber);
      this.set('modalIsOpen', false);
    }
  }
});
