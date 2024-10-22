const axios = require('axios');
require('dotenv').config();
const weatherAPI = process.env.WEATHER_KEY;
module.exports = {
    name: 'weather',
    description: 'Get the weather for a specific city',
    //calls the weather API at openweather and retrieves the current weather for the City given
    async execute(message, args){
        if(!args.length){
            return message.channel.send('Please provide a city name with the command');
        }
        const city = args.join(' ');
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=imperial`
            const response = await axios.get(url);

            const weatherData = response.data;
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const feelsLike = weatherData.main.feels_like;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;

            message.channel.send(
                `Happy to send you the weather in ${city.toUpperCase()}! \n` +
                `Temperature: ${temp} degrees \n` +
                `Feels Like: ${feelsLike} degrees \n` +
                `Description: ${description} \n` +
                `Humidity: ${humidity} % \n` +
                `Wind Speed: ${windSpeed} mph \n`
            );
        } catch (error){
            console.error(error);
            message.channel.send('Sorry, I couldn\'t process that request. Please make sure the input is correct. If this is not the issue, contact the OG Artemis to check the error log');
        }
        
    }
}