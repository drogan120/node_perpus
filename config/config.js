const dotEnv = require('dotenv');
dotEnv.config();

module.exports = {
    port = process.env.APP_PORT
}