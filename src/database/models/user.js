import { Model, DataTypes } from 'sequelize';

module.exports = (sequelize) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: new DataTypes.INTEGER(),
            },
            names: {
                type: new DataTypes.STRING(),
                allowNull: true,
            },
            nid: {
                type: new DataTypes.STRING(),
                allowNull: true,
                unique: true,
            },
            phone: {
                type: new DataTypes.STRING(),
                allowNull: true,
                unique: true,
            },
            gender: {
                type: new DataTypes.STRING(),
                allowNull: true,
            },
            email: {
                type: new DataTypes.STRING(),
                allowNull: true,
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
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
        }
    );
    return User;
};
