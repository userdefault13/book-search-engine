[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Google Books API Search Engine Refactoring

## Description

This project involves the transformation of a fully functioning Google Books API search engine. Originally built with a RESTful API, the application has been refactored to use GraphQL API powered by Apollo Server. The app is part of the MERN stack, utilizing a React front end, MongoDB database, and Node.js/Express.js server and API. It also includes features that allow users to save book searches to the backend.

## Technologies Used

- Front End: React
- Backend: Node.js, Express.js
- Database: MongoDB
- API: GraphQL (Apollo Server)

## Features

- Utilizes Google Books API for searching books
- Transformed from RESTful API to GraphQL API
- User-friendly React-based front end
- MongoDB database for storing saved book searches
- Integration with Apollo Server for GraphQL functionalities

## Installation and Usage

1. Clone the repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the development server.
5. Access the application through your browser at `http://localhost:3000`.

## How to Use

1. Upon launching the app, you'll be presented with a search interface.
2. Enter keywords for the book you want to search and click the "Search" button.
3. The app will retrieve book results using the Google Books API.
4. You can save your favorite books by clicking the "Save" button associated with each book.
5. Saved books are stored in the MongoDB database.

## Refactoring to GraphQL

The original RESTful API has been refactored to use a GraphQL API powered by Apollo Server. This enhances performance and allows for more efficient querying of data. The new GraphQL schema and resolvers provide a streamlined and flexible way to interact with the backend.

## Future Enhancements

- Implement user authentication and user-specific saved searches
- Improve the user interface for a more polished look
- Expand the search capabilities by incorporating additional APIs
- Enhance error handling and data validation
