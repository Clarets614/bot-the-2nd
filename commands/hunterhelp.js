module.exports = {
    name: 'hunterhelp',
    description: 'Provides help to the best people',
    //simple reply sending user a link to a guide
    execute(message){
        message.channel.send('I like to read up on the guides in Icy veins to get hunter info, Azor is the author and also has additional information at \n  https://www.icy-veins.com/wow/marksmanship-hunter-pve-dps-guide \nOr whisper the OG Artemis to see if she has extra info.');

    }
};