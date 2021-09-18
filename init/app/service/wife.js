const Service = require('egg').Service;

class WifeService extends Service {
    async getWifeList() {
        try {
            let wifeList = await this.app.model.Wife.findAll({
                include: [{
                    model: this.app.model.Fate,
                    as: "fate"
                }]
            });
            return wifeList;
        } catch (e) {
            return null;
        }
    }

    async createWife(id, name, fate_id) {
        try {
            await this.app.model.Wife.create({
                id: id,
                name: name,
                fate_id: fate_id,
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    async changeWife(id, name) {
        try {
            await this.app.model.Wife.update({ name: name }, {
                where: {
                    id: id
                }
            })
            return true;
        } catch (e) {
            return false;
        }
    }

    async deleteWife(id) {
        await this.app.model.Wife.destroy({
            where: {
                id: id
            }
        })
    }

}

module.exports = WifeService;