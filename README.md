# Hacktivpress
Simple Blogging system

## Routes

List of articles routes:

|      **Route**      | **HTTP** |                       **Description**                      |
|---------------------|----------|------------------------------------------------------------|
| /articles           | GET      | Get all the articles                                       |
| /articles/:id       | GET      | Get a single article info                                  |
| /articles/:category | GET      | Get articles by category                                   |
| /articles/:author   | GET      | Get articles by author                                     |
| /articles           | POST     | Create article                                             |
| /articles/:id       | DELETE   | Delete article (authenticated user only)                   |
| /articles/:id       | PUT      | Update article (authenticated user only)                   |

List of user signin and signup:

|      **Route**     | **HTTP** |                       **Description**                      |
|--------------------|----------|------------------------------------------------------------|
| /signup            | POST     | Sign up with new user info                                 |
| /signin            | POST     | Sign in while get an access token based on credentials     |

## Usage
With only npm:
```
npm install
npm run dev
```
