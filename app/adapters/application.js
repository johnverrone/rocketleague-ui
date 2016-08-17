import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:4000',
  namespace: 'api',
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});