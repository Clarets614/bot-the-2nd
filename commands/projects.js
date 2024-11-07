const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'projects',
    description: 'links to a list of projects',
    //simple reply sending user a link to projects
    execute(message){
        function project(name, techStack, description, link){
            this.name = name;
            this.techStack = techStack;
            this.description =  description;
            this.link = link;
        }
        const project1 =  new project (
            "Stock and Savor",
            "C#, RestApis, Angular, Typescript, HTML/CSS",
            "A recipe library application built with a PostgreSQL database, using Entity Framework Core for ORM to manage data on the C# back-end. The back-end exposes a set of RESTful APIs for the front-end to interact with, enabling features like adding, updating, and deleting recipes. The front-end is developed using Angular (with TypeScript), HTML, and CSS to provide a responsive user interface. ",
            "https://github.com/Clarets614/recipe-fe"
        );
        const project2 = new project (
            "Artemis Bot",
            "Javascript, Node.js, Docker",
            "A discord bot build in Node.JS to interact with a discord user, fetch the weather from an external API and send daily reminders",
            "https://github.com/Clarets614/bot-the-2nd"
        );
        const project3 = new project (
            "name",
            "tech used",
            "description of project",
            "linktoprojectguthub"
        );

        const projEmbed = new EmbedBuilder()
        .setTitle('Projects')
        .setThumbnail('discord-bot-the-2nd/assets/images/devbio-image.jpg')
        .setDescription(``)
        
        message.channel.send(`${project1.name}: ${project1.techStack}, \n${project1.description} \n${project1.link}`);

    }
};