import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('matches-widget', 'Integration | Component | matches widget', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('matches', []);

  this.render(hbs`{{matches-widget matches=matches}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'CreateMatchWeek1Week2Week3Week4Week5Week6nomatcheshavebeenplayed');
});
