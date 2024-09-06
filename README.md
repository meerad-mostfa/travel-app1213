

Travel Planner



Introduction
Travel Planner is a web application designed to help users plan and manage their trips. It provides information on weather forecasts, images of travel destinations, and calculates the trip duration. This application uses several APIs, including GeoNames for location data, Weatherbit for weather forecasts, and Pixabay for images.

Features
Location Data Retrieval: Fetches geographic coordinates and country name based on the destination using the GeoNames API.
Weather Forecasting: Provides weather updates for the destination using the Weatherbit API.
Image Search: Retrieves images of the destination using the Pixabay API.
Trip Duration Calculation: Calculates and displays the total length of the trip in days.
Persistent Storage: Stores trip details locally for future reference.
Installation

Prerequisites
Node.js: Version 16 or higher is required.

Steps to Install
Clone the Repository:
git clone https://github.com/meerad-mostfa/travel-app1213.git

Change into the project directory:
cd travel-app1213

Install dependencies:
npm install

Development
Build for development:
npm run build

Start the server:
npm run start

Access the application at http://localhost:3000.

Testing
Run tests:
npm test

Configuration
API Credentials
Update the API keys in the configuration files to ensure access to the APIs:

GeoNames API:

Open src/config/geoNamesConfig.js.
Enter your GeoNames API key.
Weatherbit API:

Open src/config/weatherbitConfig.js.
Enter your Weatherbit API key.
Pixabay API:

Open src/config/pixabayConfig.js.
Enter your Pixabay API key.


Configuration Files
Ensure that all configuration files are updated with the correct API keys to avoid issues with accessing the APIs.

Usage Instructions
Launch the Application: Open the application in your web browser.
Input Destination and Travel Dates: Enter your desired destination and travel dates to receive trip information.
View Weather Forecasts and Location Images: See weather forecasts and images of the location, and calculate the duration of your trip.

Dependencies
Express: For server-side functionality.
Webpack: For module bundling.
Babel: For JavaScript transpiling.
Sass: For styling.

Acknowledgements
GeoNames API
Weatherbit API
Pixabay API
Contributing
Contributions are welcome! Please submit a pull request or open an issue to propose changes or improvements.


Certainly! Here's an overview of what the code does:

1. Unit Tests (src/client/js/_test_/app.test.js)
This file contains a unit test for the function calculateDaysDiff. The test checks if the function correctly calculates the number of days between two dates using the Jest testing framework.

2. Application Code (src/client/js/app.js)
getGeoCoordinates(destination): Fetches geographic coordinates and country name based on a given location using the GeoNames API.
getWeatherForecast(latitude, longitude): Retrieves weather forecast data for a given set of coordinates using the Weatherbit API.
getImageForLocation(destination): Fetches an image for a specific destination using the Pixabay API.
calculateDaysUntilTrip(tripStartDate): Calculates the number of days until the trip starts.
calculateDaysDiff(startDate, endDate): Calculates the duration of the trip in days between two dates.
renderTripDetails(...): Renders the trip details on the user interface, including geographic coordinates, weather forecast, location image, and other trip information.
3. Styles (src/client/styles/styles.scss)
This SCSS file contains styling rules for the application. It includes color variables, layout styling, form styles, button styles, and responsive design. It enhances the design with a gradient background, hover effects, and animations.

4. Front-End Layout (src/client/views/index.html)
This HTML file defines the basic structure of the web application. It includes a form for entering destination and travel dates and a section to display trip details.

5. Main Entry File (src/client/index.js)
Imports styles and application functions.
Registers a Service Worker for caching and improving performance.
Adds an event listener to the travel form to fetch and display trip data using the imported functions.
6. Server (src/server/server.js)
Uses Express.js to serve static files from the dist folder (where bundled files are located). It listens on port 3000 and serves the index.html file.

7. Service Worker (src/service-worker.js)
Handles caching for offline access and improves performance by storing essential files and updating the cache when needed.

8. Webpack Configuration Files (webpack.config.js, webpack.dev.js, webpack.prod.js)
Defines how the project is bundled and built using Webpack:

webpack.config.js: Basic configuration for development with essential settings.
webpack.dev.js: Development configuration including Workbox for caching and other enhancements.
webpack.prod.js: Production configuration with optimizations for minimizing file size and performance improvements.

Summary
This code builds a web application for travel planning. Users can enter a destination and travel dates to get information such as geographic coordinates, weather forecasts, and images for the destination. The application also includes caching for offline use, file bundling with Webpack, and a responsive design.