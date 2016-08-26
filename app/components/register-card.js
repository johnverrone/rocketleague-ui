import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doRegister() {
      this.sendAction('doRegister');
    }
  }
});
