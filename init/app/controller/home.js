const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('index');
    }
    async doLogin() {
        let user = this.ctx.request.body.username;
        if (user === '藤井') {
            const token = this.ctx.app.jwt.sign(user, this.ctx.app.config.jwt.secret);
            this.ctx.body = {
                code: 20000,
                msg: '进入提瓦特成功',
                token,
            };
        } else {
            this.ctx.body = {
                code: 40000,
                msg: "进入提瓦特失败",
            };
        }
    }
}

module.exports = HomeController;