import Route from '@ember/routing/route';

export default Route.extend({

    //Attribute that loads data when 'name' changes value
    queryParams: {
        name: {
            refreshModel: true
        }
    },

    //Model hoook to make data available in 'list.hbs' filter by name
    model(params) {
            let	filter	=	{};
            if(!Ember.isEmpty(params.name)){
                    filter.name	=	params.name;
            }
            console.log(this.get('store').query('friend',	filter));
            return this.get('store').query('friend',	filter);
            // return $.get(`https://ember-interview.herokuapp.com/friends`).then(rawOrg => {
            //         return rawOrg;
            // });
    },

    actions:{
        new(){
            this.transitionTo('new');
        }
    }

});
