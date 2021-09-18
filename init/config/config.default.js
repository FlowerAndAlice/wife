/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1631367916730_5488';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.view = {
        defaultViewEngine: 'nunjucks'
    };

    config.cors = {
        origin: "*", //"*"代表所有的跨域请求
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    config.jwt = { sercet: "666" };

    config.sequelize = {
        dialect: 'mysql', //数据库类型
        database: 'genshin', //自定义
        host: 'localhost',
        port: 3306, //端口号
        username: 'root',
        password: 'lolyasuo666' //自定义
    };
    config.security = {
        csrf: {
            enable: false,
        },
    };

    config.static = {
        prefix: '/', //访问路径
        dir: path.join(appInfo.baseDir, 'app/public'), //设置静态文件目录
    }

    return {
        ...config,
        ...userConfig,
    };
};