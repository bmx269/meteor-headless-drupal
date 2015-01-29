/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
Router.route('/', {name: 'home'});
Router.route('events', {name: 'events.index'});
Router.route('news', {name: 'news.index'});
Router.route('about', {name: 'about'});
Router.route('signin', {name: 'signIn'});
Router.route('signout', {name: 'signOut'});
