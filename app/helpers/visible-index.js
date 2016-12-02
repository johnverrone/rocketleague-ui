import Ember from 'ember';

export function visibleIndex(index) {
  let idx = Number(index);
  return idx + 1;
}

export default Ember.Helper.helper(visibleIndex);