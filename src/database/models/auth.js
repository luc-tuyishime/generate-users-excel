import { hashPassword, comparePassword } from '../../utils/password';

import { Model, DataTypes } from 'sequelize';

module.exports = (sequelize) => {
    class Auth extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Auth.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: new DataTypes.INTEGER(),
            },
            firstName: {
                type: new DataTypes.STRING(),
                allowNull: false,
            },
            lastName: {
                type: new DataTypes.STRING(),
                allowNull: false,
            },
            username: {
                type: new DataTypes.STRING(),
                allowNull: false,
                unique: true,
            },
            email: {
                type: new DataTypes.STRING(),
                allowNull: false,
                unique: true,
            },
            phone: {
                type: new DataTypes.STRING(),
                allowNull: true,
                unique: true,
            },
            password: {
                type: new DataTypes.STRING(),
                allowNull: false,
            },
            role: {
                type: new DataTypes.ENUM('normal', 'admin'),
                allowNull: false,
                defaultValue: 'normal',
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
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
            modelName: 'Auth',
            tableName: 'auths',
        }
    );

    Auth.beforeCreate(async (_auth) => {
        const auth = _auth;
        if (auth.password) {
            auth.password = await hashPassword(auth.password);
        }
    });

    Auth.prototype.comparePassword = async function compareUserPassword(
        password
    ) {
        console.log(`object`, this.get().password);
        return comparePassword(password, this.get().password);
    };

    return Auth;
};
