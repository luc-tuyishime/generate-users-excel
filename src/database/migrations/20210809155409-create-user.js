const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: new DataTypes.INTEGER(),
            },
            names: {
                type: new DataTypes.STRING(),
            },
            nid: {
                type: new DataTypes.STRING(),
                unique: true,
            },
            phone: {
                type: new DataTypes.STRING(),
                unique: true,
            },
            gender: {
                type: new DataTypes.STRING(),
            },
            email: {
                type: new DataTypes.STRING(),
                unique: true,
            },
            errors: {
                type: new DataTypes.JSON(),
            },
            createdAt: {
                allowNull: false,
                type: new DataTypes.DATE(),
            },
            updatedAt: {
                allowNull: false,
                type: new DataTypes.DATE(),
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('users');
    },
};
