import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createMatch(blueTeamId, orangeTeamId, matchDate) {
      let blueTeam;
      let bluePromise = this.get('store').findRecord('team', blueTeamId).then(function(team) {
        blueTeam = team;
      });

      let orangeTeam;
      let orangePromise = this.get('store').findRecord('team', orangeTeamId).then(function(team) {
        orangeTeam = team;
      });

      let promises = [orangePromise, bluePromise];

      Ember.RSVP.all(promises).then(() => {
        let newMatch = this.get('store').createRecord('match', {
          blueTeam: blueTeam, 
          orangeTeam: orangeTeam, 
          matchDate: matchDate
        });

        newMatch.save();
      });
    }
  }
});
