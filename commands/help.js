
module.exports = {
    name: 'help',
    description: 'Displays a list of the available commands',
    //method to give user a list of the available commands to use for the bot.
    execute(message, args, commands) {
        const commandList = Array.from(commands.values()).map(cmd => `!${cmd.name}: ${cmd.description}\n`).join('\n');
        message.channel.send(
            '```yaml\n' +
            `Here are the available commands: \n${commandList}` +
            '\n```'
        );
    }
};