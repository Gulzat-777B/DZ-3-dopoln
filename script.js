document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    const cityName = document.querySelector('input').value.trim();

    fetch('http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q=' + cityName)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then((data) => {
            document.querySelector('section').innerHTML = `
                <h2>Название страны: ${data.location.country} </h2>
                <h2>Название города: ${data.location.name} </h2>
                <h2>Температура: ${data.current.temp_c} градусов</h2>
                <h2>Скорость ветра: ${data.current.wind_kph} км/час</h2>
                <img src="https:${data.current.condition.icon}" alt="Weather icon">
            `;
        })
        .catch(error => {
            document.querySelector('section').innerHTML = '<h2>City not found</h2>';
            console.err(Error);
        });
}