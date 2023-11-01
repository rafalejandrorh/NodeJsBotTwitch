const tmi = require('tmi.js');
const config = require('./config');

const options = {
    options: {
        debug:true
    },
    identity: {
        username: config.botUsernameTwitch,
        password: config.botOAuthTokenTwitch
    },
    channels: [
        config.botUsernameTwitch
    ]
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action(config.botUsernameTwitch, `Hello Gamers! Connected to ${address}:${port}`);
});

client.on('chat', (target, context, message, self) => {
    if(self) return;

    const command = message.trim().toLowerCase();
    if(command === '!hello') {
        client.say(target, `Welcome ${context.username}`);
    }

    if(command === '!game') {
        client.say(target, `We are playing GTA V!`);
    }

    if (command === '!randomnumber') {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
    }
})

// Function called when the "randomnumber" command is issued
function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}