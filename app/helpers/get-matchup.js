import Ember from 'ember';

export function getMatchup(params/*, hash*/) {
  let [blueTeam, orangeTeam, matchDate] = params;
  blueTeam = Ember.Handlebars.Utils.escapeExpression(blueTeam);
  orangeTeam = Ember.Handlebars.Utils.escapeExpression(orangeTeam);
  matchDate = Ember.Handlebars.Utils.escapeExpression(matchDate);
  return Ember.String.htmlSafe(
    `<div style="display: flex; justify-content: space-between;">
      <span style="width: 30%" class="blue-text">${blueTeam}</span>
      <div style="display: flex; flex-direction: column;">
        <small>${matchDate}</small>
      </div>
      <span style="width: 30%" class="orange-text right-align">${orangeTeam}</span>
    </div>`
  );
}

export default Ember.Helper.helper(getMatchup);
