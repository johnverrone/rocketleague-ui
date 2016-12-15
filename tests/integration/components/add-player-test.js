import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-player', 'Integration | Component | add player', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-player}}`);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 'AddPlayer');
});
