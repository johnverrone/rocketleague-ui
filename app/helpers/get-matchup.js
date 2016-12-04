import Ember from 'ember';

export function getMatchup(params/*, hash*/) {
  let [blueTeam, orangeTeam] = params;
  return blueTeam + " v. " + orangeTeam;
}

export default Ember.Helper.helper(getMatchup);
