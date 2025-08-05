module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "secret",
    port: 5432,
    database: "backend_serasa",
    define: {
        timestamp: true,
        underscored: true,
        underscoredAl: true
    }
}