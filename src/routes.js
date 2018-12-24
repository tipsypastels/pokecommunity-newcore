import pcRouteBuilder from './pcRouteBuilder';

import UsersController from './controllers/UsersController';

new pcRouteBuilder(router).buildRoutes(function() {
  this.get('users/:userid', UsersController.show);
});