import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    createTeam(e) {
      if (e.keyCode === 13 && !Ember.isBlank(e.target.value)) {
				let newTeam = this.get('store').createRecord('team', { 
          name: e.target.value.trim(), 
          wins: 0, 
          loses: 0 
        });

        newTeam.save();
				e.target.value = '';
			}
    },

    deleteTeam(id) {
      this.get('store').findRecord('team', id, { backgroundReload: false }).then(function(post) {
        post.destroyRecord();
      });
    }
  }
});
