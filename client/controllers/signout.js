SignOutController = RouteController.extend({
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    AccountsTemplates.logout();
  }
});
