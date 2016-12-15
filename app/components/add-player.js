import Ember from 'ember';

export default Ember.Component.extend({
   actions: {

    openModal() {
      this.set('modalIsOpen', true);
    },

    closeModal() {
      this.set('modalIsOpen', false);
    }
  }
});
