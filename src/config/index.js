const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DATABASE_URL,
    botUsernameTwitch: process.env.BOT_USERNAME_TWITCH,
    botOAuthTokenTwitch: process.env.BOT_OAUTH_TOKEN_TWITCH
};