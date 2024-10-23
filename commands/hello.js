module.exports = {
    name: 'hello',
    description: 'Responds to a friendly greeting with a helpful message',


    execute(message){
            message.channel.send('Hiya, use the help command to list the entire directory of commands. Hope it helps!');    
    }
};