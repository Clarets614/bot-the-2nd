const _ = require('lodash');
module.exports = {
    name: 'test',
    description: 'Just for testing',
    //just using this to test code functions here and there while working on this.
    execute(message){
        let test = 'Success is not built on success';
        let formattedTest = _.startCase(test.toLowerCase());
        message.channel.send(`${formattedTest}`);
    }
};

//'Testing whatever is here, don\'t mind me'