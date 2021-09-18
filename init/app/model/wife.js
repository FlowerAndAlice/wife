module.exports = app => {
    const { STRING } = app.Sequelize;
    const Wife = app.model.define('wife', {
        name: STRING,
        fate_id: STRING,
    })

    Wife.associate = function() { //所属哪个fate，指向fate主键
        app.model.Wife.belongsTo(app.model.Fate, {
            foreignKey: 'fate_id',
            as: 'fate'
        })
    }

    return Wife;
}