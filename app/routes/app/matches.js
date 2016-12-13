import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      matches: this.get('store').findAll('match'),
      teams: this.get('store').findAll('team')
    });
  }
});
