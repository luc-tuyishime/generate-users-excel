module.exports = {
    dev: {
        username: process.env.POSTGRES_DB_NAME,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_DATABASE,
        port: process.env.POSTGRES_DB_PORT,
        host: process.env.POSTGRES_DB_HOST,
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
        username: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_DATABASE,
        host: process.env.POSTGRES_DB_HOST,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
};
