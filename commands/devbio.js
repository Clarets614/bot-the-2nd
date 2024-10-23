const { Embed, EmbedBuilder } = require("discord.js");
const { name, description, execute } = require("./weather");
const aboutEmbed = new EmbedBuilder().setColor(abdbe3).setTitle('About the Developer').setDescription('stuff here eventually').setThumbnail('https://cdn.dropp.cloud/9ea8x2.jpg');
module.exports = {
    name: "About the dev",
    description: "A little introduction",
    execute(message){
        message.channel.send(
                `Preferred Psuedonym: Artemis \n` +
                `Place of Origin: Michigan` +
                `Feels Like:  \n` +
                `Description: \n` +
                `Humidity:  % \n` +
                `mph`
        )
    }
}