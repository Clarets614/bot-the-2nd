const { Client, GatewayIntentBits, ChannelType } = require('discord.js');  //sets up the required packages for discord bot
const { prefix } = require('./config.json'); //sets up the configurations in the json
const axios = require('axios'); //sets up axios so that API can be used
const fs = require('fs');  //sets up file system node so that commands folder is used


require('dotenv').config(); //sets up dotenv so that tokens and keys are private

const Discord = require('discord.js'); //importing discord.js
const { channel } = require('diagnostics_channel');

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.DirectMessageReactions,
        Discord.GatewayIntentBits.DirectMessageTyping
    ],
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.Message
    ]
}); //creates new client with intents




//sets up command variables to be able to load commands dynamically
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = new Map();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
}

//variables for tokens and keys 
const token = process.env.CLIENT_TOKEN;
const weatherAPI = process.env.WEATHER_KEY;


//initialization feedback so that I can tell the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.channels.fetch('1041490987001852019')
    .then(channel => {
        channel.send("Artemis online")
    })
});

client.on('messageCreate', message => {
    if (message.author.bot) return; //ignore messages from bots
//if a user sends a dm to the bot
    if (message.channel.type === Discord.ChannelType.DM) {
        console.log(`Bot-the-2nd received message: ${message}`);
        message.reply("Hello! I don't have any personal conversation functionality at this time. Using the command prompts in the discord channel will be the best way to get my help.");
    }
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        //splitting the prefix off of the args command
        const commandName = args.shift().toLowerCase();
        //making sure that the name of the command is input as lowercase

        const command = commands.get(commandName);
        if (command) {
            try {
                command.execute(message, args, commands);
            } catch (error) {
                console.error(`Error occured while executing command: ${commandName}`, error);
                message.channel.send('The dev fucked it up. Go tell Artemis shit\'s broke');
            }


        }
    }


}

);

process.on('exit', (code)=> {
    const channel = client.channels.cache.get('1041490987001852019');
    if(channel){
        channel.send('ArtemisBot is logging out. See ya around!');
    }
})

//this line needs to stay at the very end
client.login(token);