module.exports = app => {
    const { STRING } = app.Sequelize;
    const Fate = app.model.define('fate', {
        name: STRING,
    })
    return Fate;
}