require('dotenv').config()
module.exports= {
    DB_URL: process.env.DB_URL,
    PORT : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV,
    SESS_NAME : process.env.SESS_NAME,
    SESS_SECRET : process.env.SESS_SECRET,
    SESS_LIFETIME : process.env.SESS_LIFETIME,
    IN_PRODUCTION : process.env.IN_PRODUCTION
}