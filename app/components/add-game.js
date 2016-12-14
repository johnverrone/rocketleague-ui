import Ember from 'ember';

export default Ember.Component.extend({
  mvpOptions: [
    {label: 'No', value: false},
    {label: 'Yes', value: true}
  ],
  
  actions: {
    openModal() {
      this.set('modalIsOpen', true);
    },

    closeModal() {
      this.set('modalIsOpen', false);
    },

    submit() {
      const blueTeamPlayers = this.get('blueTeam.players');
      const orangeTeamPlayers = this.get('orangeTeam.players');
      this.get('onSubmit')(blueTeamPlayers, orangeTeamPlayers);
      this.set('modalIsOpen', false);
    }
  }
});
