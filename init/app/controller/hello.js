const Controller = require('egg').Controller;

class HelloController extends Controller {
    async index() {
        let result = await this.ctx.service.hello.getMessage();
        if (result) {
            this.ctx.body = {
                code: 20000,
                data: result,
            }
        } else {
            this.ctx.body = {
                code: 50000,
                data: '服务器拉大闸'
            }
        }

    }
}

module.exports = HelloController;