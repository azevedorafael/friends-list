import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return	Ember.Object.create({name:	null});
        // return this.get('store').findAll('friend');
    }
});
