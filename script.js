// api key: 9a0f416ed393942cda25fa87839684d8

// api call: api.openweathermap.org/data/2.5/weather?q=${city name}&appid=9a0f416ed393942cda25fa87839684d8

// write functions to return weather data

/* 
    function() {

       try {
           await fetch(api)
           await data.json()

       } 

       catch {
           error handling
       }
    }
*/

const main = (() => {

    // DOM
    const container = document.createElement('div');
    
    // logic
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const location = document.querySelector('input').value;
        async function getWeather (location) {
            try {
                let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9a0f416ed393942cda25fa87839684d8`,
                {mode: 'cors'});
                let data = await request.json();
                console.log(data);
            } catch (err) {
                console.error('Error', err)
            };
        };
        getWeather(location);
    });

})();