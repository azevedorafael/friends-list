import Component from '@ember/component';

export default Component.extend({
    classNameBindings:	['oneLetter::name-wrong'],
    oneLetter:	Ember.computed('friend.name',	function(){
            return this.get('friend.name')	<=	1;
    }),
    friend:	Ember.Object.create({
            name:	'R'
    })
})

