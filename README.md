LOCAVORI

# DESCRIPTION

  ## Duration:
    3-week sprint + 2 week break

  Locavori is a full-stack, web application that gives consumers who love to find and learn about local artisan makers. Makers are able to create a profile where they can tell their story, share photos, and direct users to their maker websites and social media. Users are able to search by product category and location, view maker profiles including their featured photos and primary business categories. Users are able to “favorite” makers and see them displayed in a list on their favorites page.



# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).



## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
- [GoogleCloudPlatformAccount] (https://console.developers.google.com/)
  - Enable the following API's:
    - Maps Javascript API
    - Distance Matrix API
    - Places API
    - Geocoding API
    - Service Usage API



## Create database and table

Create a new database called `locavori` and copy and paste the database.sql file to your SQL:
----------
OR
----------
Create a new database called `locavori` and run: `psql locavori < database.sql` in your terminal

If you would like to name your database something else, you will need to change `locavori` to the name of your new database name in `server/modules/pool.js` (Line 33)



## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgreSQL if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`



## Technologies

- React
- React Hooks
- Redux
- Redux Sagas
- Node.js
- Express
- PostgreSQL
- Google Maps Javascript API
- Google Distance Matrix API
- Google Geocoding API
- Google Places API
- [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api)
- [use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)
- [@reach/combobox](https://www.npmjs.com/package/@reach/combobox)
- Bootstrap (React)
- Font Awesome

## Contact
- Sam Mahler - [mahler.sam@gmail.com](mailto:mahler.sam@gmail.com)
- Emma Song Fisher - [emmasongf@gmail.com](mailto:emmasongf@gmail.com)
- Stav Kidron - [kidronstav@gmail.com](mailto:kidronstav@gmail.com)
- Beau Weise - [beauweise@gmail.com](mailto:beauweise@gmail.com)
- Thomas Brookshaw - [tbrookshaw13@gmail.com](mailto:tbrookshaw13@gmail.com)


 







