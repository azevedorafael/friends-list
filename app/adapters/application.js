import DS from 'ember-data';

export	default	DS.RESTAdapter.extend({
    host:	'https://ember-interview.herokuapp.com',
    namespace:	null,

    headers:	{
		headers:	{
            "Content-Type": "application/json\nfriend-edit: true\n",
		}
}

});
