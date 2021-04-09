const request = require("postman-request");

const forecast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=df54006c00e9c03358c4dcbb9ce716d7&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services", undefined);
        } else if (body.error === 0) {
            callback(
                "Unable to fetch weather. Please try again later",
                undefined
            );
        } else {
            const data = body.current;
            callback(
                undefined,
                `${data.weather_descriptions[0]}. It is ${data.temperature} degrees. It feels like ${data.feelslike} degrees.`
            );
        }
    });
};

module.exports = forecast;
