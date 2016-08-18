import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('players');
  this.route('teams');
  this.route('matches');

  this.route('auth', function() {
    this.route('register');
  });
});

export default Router;
