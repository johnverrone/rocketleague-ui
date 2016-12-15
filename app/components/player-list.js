import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addPlayer(newPlayer) {
      this.get('onAdd')(newPlayer);
    },

    delete(id) {
      this.get('onDelete')(id);
    }
  }
});
