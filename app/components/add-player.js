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
      const newUser = {
        username: this.get('username'),
        emailAddress: this.get('emailAddress'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        team: this.get('team')
      };
      this.get('onAdd')(newUser);
      this.set('modalIsOpen', false);
    }
  }
});
