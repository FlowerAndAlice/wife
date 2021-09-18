'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/hello', controller.hello.index);
    router.post('/login', controller.home.doLogin);
    router.resources("fate", "/fate", app.middleware.checktoken(), controller.fate);
    router.resources("wifes", "/wifes", app.middleware.checktoken(), controller.wife);
};