import Route from '@ember/routing/route';

export default Route.extend({

    friends: [{ 
                id: "1", name: 'Clairton',lastName: 'Azevedo',friendsSince: '2017-10-09' }, {
                id: "2", name: 'Rodrigo' ,lastName: 'Silva',friendsSince: '2017-11-19'
    }],


    //Attribute that loads data when 'name' changes value
    queryParams: {
        name: {
            refreshModel: true
        }
    },

    //Model hoook to make data available in 'list.hbs' filter by name
    model(params) {
        // let friend = this.modelFor('friends');
        // return $.get(`https://ember-interview.herokuapp.com/friends`).then(rawRepo => {
            let	filter	=	{};
            if(!Ember.isEmpty(params.name)){
                    filter.name	=	params.name;
            }
            return this.get('store').query('friend',	filter);
        // });
    },

    actions:{
        new(){
            this.transitionTo('new');
        }
    }

});
