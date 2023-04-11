# README

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bertoforteza_clevapp&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bertoforteza_clevapp&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=bertoforteza_clevapp&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=bertoforteza_clevapp&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=bertoforteza_clevapp&metric=bugs)](https://sonarcloud.io/summary/new_code?id=bertoforteza_clevapp)

This is the README for ClevApp, a React and Redux application developed in TypeScript using Styled Components.

## Description

ClevApp is a TypeScript application that allows you to read a list of posts, view each post in detail, delete and edit posts. It is built using React and Redux and has been fully tested using Jest, React Testing Library, Mock Service Worker, and Cypress for end-to-end testing. The application's styles are implemented using Styled Components. Additionally, the project is set up with GitHub Actions and Husky hooks for automated testing and linting. The project also uses SonarCloud for continuous code quality analysis.

## Technologies Used

The application uses the following technologies:

- React: to build the user interface.
- TypeScript: as the primary programming language.
- Redux: for state management.
- Jest: for unit and integration testing.
- React Testing Library: for component testing.
- Mock Service Worker: for mocking HTTP requests in tests.
- Cypress: for end-to-end testing.
- Styled Components: for styling the application.
- GitHub Actions: for automated testing and linting.
- Husky: for Git hooks.
- SonarCloud: for continuous code quality analysis.

## Configuration

Before you can run the application, you need to perform the following steps:

1.  Clone the repository from GitHub.
2.  Run `npm install` in the root directory of the project to install the Node.js dependencies.
3.  Run `npm run client-install` to install the React dependencies.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL=https://jsonplaceholder.typicode.com/posts`

## Usage

Once the application is configured, you can run it with the npm start command in the root directory of the project.

To build the application, run the npm run build command.

To run the tests, use the following commands:

- `npm test`: to run tests in watch mode.
- `npm run cypress:open`: to run Cypress end-to-end tests.

The application can be accessed in a web browser at `http://localhost:3000/`.

The deployed version of the application can be found at [ClevApp web site](https://clevapp.netlify.app/).

### Credentials

- Username: admin
- Password: adminadmin

## Contributing

If you would like to contribute to the application, you can do so through pull requests on GitHub. To do so, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your change (`git checkout -b my-new-feature`).
3.  Make your changes and commit them (`git commit -am 'Add some feature'`).
4.  Push the branch to your fork (`git push origin my-new-feature`).
5.  Create a new Pull Request.
