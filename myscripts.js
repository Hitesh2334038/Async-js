// function getWeather(woeid) {
//             fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`)
//             .then(result => {
//                 // console.log(result);
//                 return result.json();
//             })
//             .then(data => {
//                 // console.log(data);
//                 const today = data.consolidated_weather[0];
//                 console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
//             })
//             .catch(error => console.log(error));
//         }
//         getWeather(2487956);

fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/');
