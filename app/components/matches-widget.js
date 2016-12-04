import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('basicTabsContent', [
      {id: 1, title: 'Week 1'},
      {id: 2, title: 'Week 2'},
      {id: 3, title: 'Week 3'},
      {id: 4, title: 'Week 4'},
      {id: 5, title: 'Week 5'},
      {id: 6, title: 'Week 6'}
    ]);
    this.set('basicTabsSelection', 1);
  },

  matchesByWeek: Ember.computed('matches', function() {
    return this.get('matches').filterBy('weekNumber', this.get('basicTabsSelection'));
  }),

  actions: {

    open() {
      this.set('isShowingModal', true);
    },

    close() {
      this.set('isShowingModal', false);
    },

    createMatch(blueTeamId, orangeTeamId, matchDate) {
      this.get('onCreate')(blueTeamId, orangeTeamId, matchDate);
    },

    addGame(matchId) {
      this.get('addGame')(matchId);
    },

    tabClick() {
      this.set('matchesByWeek', Ember.computed('matches', function() {
        return this.get('matches').filterBy('weekNumber', this.get('basicTabsSelection'));
      }));
    }
  }
});
