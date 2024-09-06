
import './styles/styles.scss';
import { getGeoCoordinates, getWeatherForecast, getImageForLocation, renderTripDetails, calculateDaysDiff } from './js/app.js';

// تسجيل Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        const swUrl = '/service-worker.js';

        navigator.serviceWorker
            .register(swUrl)
            .then((registration) => {
                console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Event listener for the travel form submission
document.getElementById('travel-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieving user inputs
    const destinationInput = document.getElementById('location').value;
    const tripStartDate = document.getElementById('start-date').value;
    const tripEndDate = document.getElementById('end-date').value;

    try {
        // Fetching coordinates, weather, and image data
        const locationCoordinates = await getGeoCoordinates(destinationInput);
        const locationWeather = await getWeatherForecast(locationCoordinates.lat, locationCoordinates.lng);
        const locationImage = await getImageForLocation(destinationInput);

        // Calculating the trip duration
        const tripLength = calculateDaysDiff(tripStartDate, tripEndDate);

        // Rendering the trip details on the page
        renderTripDetails(locationCoordinates, locationWeather, locationImage, tripStartDate, tripEndDate, tripLength);
    } catch (error) {
        console.error('An error occurred while fetching trip data:', error);
        alert('Failed to retrieve trip details. Please check your input and try again later.');
    }
});
