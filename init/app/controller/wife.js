const Controller = require("egg").Controller;

class WifeController extends Controller {

    //restful :index/create/destroy/update
    async index() {
        // let id = this.ctx.request.query.id;
        // let wifeList = await this.app.model.Wife.findAll();
        // this.ctx.body = wifeList;
        let wifelist = await this.ctx.service.wife.getWifeList(); //调用service
        if (wifelist) {
            this.ctx.body = {
                code: 20000,
                data: wifelist,
            }
        } else {
            this.ctx.body = {
                code: 50000,
                msg: '服务器异常,请与管理员联系',
            }
        }
    }

    async create() {
        let name = this.ctx.request.body.name;
        let id = this.ctx.request.body.id;
        let fate_id = this.ctx.request.body.fate;
        let result = await this.ctx.service.wife.createWife(id, name, fate_id);
        if (result) {
            this.ctx.body = {
                code: 20000,
                msg: '又多着一个老婆'
            }
        } else {
            this.ctx.body = {
                code: 50000,
                msg: '服务器拉垮了,请与管理员联系'
            }
        }
    }

    async update() {
        let id = this.ctx.params.id;
        let name = this.ctx.request.body.name;
        let result = await this.ctx.service.wife.changeWife(id, name);
        if (result) {
            this.ctx.body = {
                code: 20000,
                msg: '老婆改造大成功!'
            }
        } else {
            this.ctx.body = {
                code: 50000,
                msg: '服务器拉垮了,请与管理员联系'
            }
        }
    }

    async destroy() {
        let id = this.ctx.params.id;
        let result = await this.ctx.service.wife.deleteWife(id);
        if (result) {
            this.ctx.body = {
                code: 20000,
                msg: '老婆byebye'
            }
        } else {
            this.ctx.body = {
                code: 50000,
                msg: '服务器拉垮了,请与管理员联系'
            }
        }
    }

}

module.exports = WifeController;