const Service = require("egg").Service;

class FateService extends Service {
    async getFateList() {
        try {
            let FateList = await this.app.model.Fate.findAll();
            return FateList;
        } catch (error) {
            return null;
        }
    }

    async createFate(id, name) {
        try {
            await this.app.model.Fate.create({
                id,
                name,
            })
            return true;
        } catch (e) {
            return false;
        }
    }

    async changeFate(id, name) {
        await this.app.model.Fate.update({ name: name }, {
            where: {
                id: id
            }
        })
        return true;
    }

    async deleteFate(id) {
        await this.app.model.Fate.destroy({
            where: {
                id: id
            }
        })
        return true;
    }

}
module.exports = FateService;