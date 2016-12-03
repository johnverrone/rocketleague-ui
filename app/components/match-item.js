import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addGame() {
      const match = this.get('match');
      this.get('addGame')(match.id);
    }
  }
});
