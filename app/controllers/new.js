import Controller from '@ember/controller';

export default Controller.extend({

    isNameEnoughLong: Ember.computed.gte('name.length', 3),
    isLastNameEnoughLong: Ember.computed.gte('lastName.length', 3),
    isDateValid: Ember.computed('friendsSince', function () {
        if (!this.get('friendsSince')) {
            return false
        }
        return true
    }),

    isValid: Ember.computed.and('isNameEnoughLong', 'isLastNameEnoughLong', 'isDateValid'),

    _clearFields: function () {
        this.set('name', '');
        this.set('lastName', '');
        this.set('friendsSince', '');
        this.set('isValid', false);
    },

    _postFriend: function () {
        let name = this.get('name')
        let lastName = this.get('lastName')
        let friendsSince = this.get('friendsSince')
        let newFriend = this.store.createRecord('friend', {
            name,
            lastName,
            friendsSince
        })
        newFriend.save()
        alert(newFriend);
    },
    _clearWarnings: function () {
        $(document).ready(function () {

            window.setTimeout(function () {
                $(".alert-danger").fadeTo(100, 0).slideUp(100, function () {
                    $(this).alert('close');
                });
            }, 100);

        });
    },
    actions: {

        createFriend() {

            if (this.get('isValid')) {
                this._postFriend();
                this.set('messageFinal', `Amigo ${this.get('name')} salvo com sucesso!`);
                this._clearWarnings();
                this._clearFields();
                this.transitionToRoute('lista');
            }
            else {
                let msg = "";
                if (!this.get('isNameEnoughLong')) {
                    this.set('nomeError', `O nome deve ter mais que 3 caracteres! Você digitou: ${this.get('name')} `);
                    // msg+=`O nome deve ter mais que 3 caracteres! Você digitou: ${this.get('nome')}! `+"\n";
                }
                if (!this.get('isLastNameEnoughLong')) {
                    this.set('sobreError', `O sobrenome deve ter mais que 3 caracteres! Você digitou: ${this.get('lastName')}`);
                    // msg+=`O sobrenome deve ter mais que 3 caracteres! Você digitou: ${this.get('sobreNome')}!` +"\n";
                }
                if (!this.get('isDateValid')) {
                    this.set('dataError', `A data deve deve estar entre 1 mês antes do dia atual e até 1 mês depois! Você digitou: ${this.get('friendsSince')}`);
                }
                // this.set('messageError',msg);
            }
        },

        saveFriendHitEnter(){
            this.send('createFriend',	this.get('model'));
        }


    }
});
