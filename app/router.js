import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('friends');
  //Route for friend and Dynamic Segment for friend ID
  this.route('friend', {path: 'friends/:id'});
  this.route('new');
  this.route('edit');
});

export default Router;
