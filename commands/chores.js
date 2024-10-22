module.exports = {
    name: 'chores',
    description: 'What chores do we need to get done today?',
    execute(message){
        switch(new Date().getDay()){
            case 0:
            day = "Sunday: Time to plan out a couple dinners for the week and shop for groceries needed. Don't forget to look at the calendar for upcoming events!";
            break;
            case 1:
            day = "Monday: Check your email, reply to recruiters, and load the dishwasher";
            break;
            case 2:
            day = "Tuesday: Push that code to Github, review LinkedIn for jobopps, and get some laundry in the washing machine";
            break;
            case 3:
            day = "Wednesday: Dinner goes in the crockpot before noon! Email out to recruiters and review some coding algorithms";
            break;
            case 4:
            day = "Thursday: Review your latest project and research a feature or bug. ";
            break;
            case 5:
            day = "Friday: I'm tired, post about your latest project on LinkedIn I guess. Try not to make it too cringe.";
            break;
            case 6:
            day = "Saturday: Somehow made it to the weekend. Kid goes to piano.";
            break;

        }
        message.channel.send(`Chore Daily Focus: \nToday is ${day}`);
    }
};