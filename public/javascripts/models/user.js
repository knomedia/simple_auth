var User = DS.Model.extend( Ember.Validations.Mixin, {
  name:     DS.attr('string'),
  email:    DS.attr('string'),
  username: DS.attr('string'),

  errors: {}
});

User.reopen({
  validations: {
    name: {
      presence: true
    }
  }
});

module.exports = User;

