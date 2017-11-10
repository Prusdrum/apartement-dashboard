module.exports = {
    PORT: process.env.PORT || 8081,
    DB_PATH: 'mongodb://mongo/apartement',
    USE_DB:  process.env.USE_DB || true,
    DEV: process.env.NODE_ENV !== 'production'
};