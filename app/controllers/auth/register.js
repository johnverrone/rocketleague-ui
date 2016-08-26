import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register() {
      this.get('model').save()
        .then(() => {
          this.transitionToRoute('auth.login');
        });
    }
  }
});
