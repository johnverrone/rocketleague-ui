import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(id) {
      this.get('onDelete')(id);
    }
  }
});
