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
    }
  }
});
