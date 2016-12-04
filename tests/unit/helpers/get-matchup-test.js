
import { getMatchup } from 'rocketleague-ember/helpers/get-matchup';
import { module, test } from 'qunit';

module('Unit | Helper | get matchup');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = getMatchup(["test", "helper"]);
  assert.equal(result, "test v. helper");
});

