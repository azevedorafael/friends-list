import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let friend = this.modelFor('friend');
        return $.get(`https://ember-interview.herokuapp.com/friends`).then(rawRepo => {
          return rawRepo;
        });
    }
});
