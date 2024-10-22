module.exports = {
    name: 'status',
    description: 'Check the development status of this bot',
    //simple reply message to keep updated with the progress of this projects development
    execute(message){
        message.channel.send('Recently able to find a home in a Docker container! We are making progress :) \nNumber of commands: 8\nCan be online whenever docker container is running. ')
    }
};