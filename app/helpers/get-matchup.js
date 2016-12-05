import Ember from 'ember';

export function getMatchup(params/*, hash*/) {
  let [blueTeam, orangeTeam] = params;
  blueTeam = Ember.Handlebars.Utils.escapeExpression(blueTeam);
  orangeTeam = Ember.Handlebars.Utils.escapeExpression(orangeTeam);
  return Ember.String.htmlSafe(
    `<div style="display: flex; justify-content: space-between;">
      <span style="width: 45%" class="blue-text">${blueTeam}</span>
      <small>vs.</small>
      <span style="width: 45%" class="orange-text right-align">${orangeTeam}</span>
    </div>`
  );
}

export default Ember.Helper.helper(getMatchup);
