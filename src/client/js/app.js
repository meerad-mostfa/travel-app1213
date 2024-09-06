

// Function to retrieve geographic coordinates and country name based on a location
const getGeoCoordinates = async (destination) => {
  try {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${destination}&maxRows=1&username=meeradabdo`);
    if (!response.ok) {
      throw new Error(`GeoNames API encountered an issue: ${response.status}`);
    }
    const { geonames } = await response.json();
    if (geonames && geonames.length > 0) {
      const { lat, lng, countryName } = geonames[0];
      return { lat, lng, countryName };
    } else {
      throw new Error('Destination not found');
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to fetch the weather forecast for a specific set of coordinates
const getWeatherForecast = async (latitude, longitude) => {
  try {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=23b7aff43a7f453880ec7339fad67f50`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
};

// Function to fetch an image for a given destination using the Pixabay API
const getImageForLocation = async (destination) => {
  try {
    const response = await fetch(`https://pixabay.com/api/?key=45814151-c21703a535953e2d8fe24487f&q=${encodeURIComponent(destination)}&image_type=photo`);
    const { hits } = await response.json();
    if (hits.length > 0) {
      return hits[0].webformatURL;
    } else {
      return 'default_image_url';
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to calculate the number of days until the trip starts
const calculateDaysUntilTrip = (tripStartDate) => {
  const tripDate = new Date(tripStartDate);
  const currentDate = new Date();
  const timeDifference = tripDate - currentDate;
  const daysUntilTrip = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysUntilTrip;
};

// Function to calculate the duration of the trip in days
const calculateDaysDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end.getTime() - start.getTime();
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  return Math.round(dayDifference) - 1;
};

// Function to display trip details in the UI
const renderTripDetails = (geoCoordinates, weatherForecast, locationImage, start, end, tripLength) => {
  const tripDetailsContainer = document.getElementById('trip-info');
  const daysUntilTrip = calculateDaysUntilTrip(start);

  tripDetailsContainer.innerHTML = `
    <h2>Journey to ${geoCoordinates.countryName}</h2>
    <img src="${locationImage}" alt="${geoCoordinates.countryName}" class="trip-img">
    <p>Departure Date: ${start}</p>
    <p>Return Date: ${end}</p>
    <p>Days until departure: ${daysUntilTrip}</p>
    <p>Trip Length: ${tripLength} days</p>
    <p>Weather Forecast: ${weatherForecast.data[0].temp}°C, ${weatherForecast.data[0].weather.description}</p>
  `;
};

export { getGeoCoordinates, getWeatherForecast, getImageForLocation, renderTripDetails, calculateDaysDiff };