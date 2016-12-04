import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createMatch(blueTeamId, orangeTeamId, matchDate, weekNumber) {
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
          matchDate: matchDate,
          weekNumber: weekNumber
        });

        newMatch.save();
      });
    },

    addGame(matchId) {
      this.get('store').findRecord('match', matchId).then(match => {
        let gameNumber = Math.max(...match.get('games').mapBy('gameNumber')) + 1;
        gameNumber = isFinite(gameNumber) ? gameNumber : 1;
        let newGame = this.get('store').createRecord('game', {
          match: match,
          gameNumber: gameNumber
        });
        newGame.save();
      });
    }
  }
});
