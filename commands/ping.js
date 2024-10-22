module.exports = {
    name: 'ping',
    description: 'How fast this bot can run!',
    //simple reply to user comparing the time between when the bot receives the message and responds
    execute(message){
        message.channel.send('Ping: ' + (Date.now() - message.createdTimestamp).toString() + ' ms');
    }
};