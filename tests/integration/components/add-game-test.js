import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-game', 'Integration | Component | add game', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-game}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'AddGame');
});
