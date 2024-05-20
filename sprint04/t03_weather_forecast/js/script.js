const apiKey = '099341adc52be87be7f61fb14f4faf32';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast`;

async function getWeatherForecast(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data.list;
}

function displayWeatherForecast(forecastData) {
  const forecastElement = document.getElementById('forecast');
  forecastElement.innerHTML = '';

  const uniqueDays = {};

  forecastData.forEach(day => {
    const date = new Date(day.dt * 1000);
    const dayKey = date.toDateString();

    if (!uniqueDays[dayKey]) {
      uniqueDays[dayKey] = day;
    } else {
      uniqueDays[dayKey] = day;
    }
  });

  Object.values(uniqueDays).forEach(day => {
    const date = new Date(day.dt * 1000);
    const dayOfWeek = getDayOfWeek(date.getDay());
    const dayOfMonth = date.getDate();
    const month = getMonthName(date.getMonth());
    const temperature = Math.round(day.main.temp - 273.15);
    const condition = day.weather[0].description;

    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.innerHTML = `
      <div class="date">${dayOfWeek}, ${dayOfMonth} ${month}</div>
      <div class="temperature">${temperature}°C</div>
      <div class="condition">${condition}</div>
    `;
    forecastElement.appendChild(dayElement);
  });
}

function getDayOfWeek(day) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[day];
}

function getMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month];
}

async function init() {
  const city = 'Chernihiv';
  const forecastData = await getWeatherForecast(city);
  displayWeatherForecast(forecastData);
}

init();

