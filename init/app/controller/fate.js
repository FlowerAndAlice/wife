const Controller = require("egg").Controller;

class FateController extends Controller {

    //restful: index/create/destroy/update
    // 不做任何异常处理

    //班级、学生；

    async index() {
        // let id = this.ctx.request.query.id;
        let fateList = await this.ctx.service.fate.getFateList();
        this.ctx.body = {
            code: 20000,
            data: fateList,
        }
    }

    async create() {
        let name = this.ctx.request.body.name;
        let id = this.ctx.request.body.id;
        await this.ctx.service.fate.createFate(id, name);
        this.ctx.body = {
            code: 20000,
            msg: '老婆被加强了'
        }
    }

    async update() {
        let id = this.ctx.params.id;
        let name = this.ctx.request.body.name;
        await this.ctx.service.fate.changeFate(id, name);
        this.ctx.body = {
            code: 20000,
            msg: '老婆命座改造大成功!'
        }
    }

    async destroy() {
        let id = this.ctx.params.id;
        let result = await this.ctx.service.fate.deleteFate(id);
        if (result) {
            this.ctx.body = {
                code: 20000,
                msg: '老婆命座byebye'
            }
        } else {
            this.ctx.body = {
                code: 50000,
                msg: '服务器拉垮了,请与管理员联系'
            }
        }
    }
}

module.exports = FateController;