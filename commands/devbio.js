const { Embed, EmbedBuilder } = require("discord.js");
const { name, description, execute } = require("./weather");

module.exports = {
    name: 'devbio',
    description: "A little introduction",
    execute(message){
        const aboutEmbed = new EmbedBuilder()
        .setTitle('About the Developer')
        .setDescription('stuff here eventually- sample image for test')
        .setThumbnail('https://cdn.dropp.cloud/9ea8x2.jpg')
        .addFields(
            { name: 'Tech Stack', value: 'C#, .NET, Angular, Node.js, SQL Server, Docker, HTML/CSS/JS'},
            { name: 'Projects', value: 'Stock and Savor, Discord Bot' }
        )
        .setFooter({ text: 'Clare Stock | Developer'});
        message.channel.send({ embeds: [aboutEmbed] });
    }
}