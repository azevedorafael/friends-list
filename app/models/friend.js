import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string', { defaultValue: '' }),
    lastname: DS.attr('string', { defaultValue: '' }),
    friendsSince: DS.attr('date')
});
