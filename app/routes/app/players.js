import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      players: this.get('store').findAll('player'),
      teams: this.get('store').findAll('team')
    });
  }
});
