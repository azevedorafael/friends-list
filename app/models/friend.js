import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: '' }),
    lastName: DS.attr('string', { defaultValue: '' }),
    friendsSince: DS.attr('date')
});
