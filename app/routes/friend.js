import Route from '@ember/routing/route';

export default Route.extend({
    friends: [{
        id: "1", name: 'Clairton', lastName: 'Azevedo', friendsSince: '2017-10-09'
    }, {
        id: "2", name: 'Rodrigo', lastName: 'Silva', friendsSince: '2017-11-19'
    }],
    model(params) {
        return this.get('friends').findBy('id', params.id);
    }
});
