import dotenv from 'dotenv';

dotenv.config();
module.exports = {
    dev: {
        username: process.env.DB_NAME_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_DATABASE_DEV,
        port: process.env.DB_PORT_DEV,
        host: process.env.DB_HOST_DEV,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    test: {
        username: process.env.POSTGRES_DB_USER_TEST,
        password: process.env.POSTGRES_DB_PASSWORD_TEST,
        database: process.env.POSTGRES_DB_NAME_TEST,
        host: process.env.POSTGRES_DB_HOST_TEST,
        port: process.env.POSTGRES_DB_PORT_TEST,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
};
