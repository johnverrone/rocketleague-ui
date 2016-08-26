import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    doLogin() {
      this.sendAction('doLogin');
    },
    doRegister() {
      this.sendAction('doRegister');
    }
  }
});
