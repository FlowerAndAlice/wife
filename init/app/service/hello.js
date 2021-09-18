const Service = require("egg").Service;

class HelloService extends Service {
    async getMessage() {
        try {
            return await this.app.model.Hello.findAll();
        } catch (error) {
            return null;
        }
    }
}

module.exports = HelloService;