# manar-blog
personal blog with authentication and CRUD functionality served by REST APIs and handled by mongoDB and a React JS front end app

manar-blog
First complete project using MERN (mongoDB+express+react)

Technologies used:

- MongoDB
- Express JS: used for REST api creation and handling of requests and responses
- React JS: all client facing files and components (I did not use redux in this project, instead I relied mainly on local state in components where it was needed.
- React 3rd Party Libraries: these included general purpose libraries used to make life easier within the react side of the project, examples are reactstrap, react-html-parser, axios, materialize-css, react-router, and more.
- Express 3rd Party Libraries: mainly used for security and authentication purposes such as bcryptjs, config, jsonwebtoken, mongoose.

Authentication:

- this part took the larger amount of time, the roles or the interface of the app is split into two parts:
  - Regular users can view the main page, view a specific blog post in full, go to the contact page, go to various links.
  - Admin users can, on top of the above, go to the Admin page which will only open once login is successful, and be able to add, edit, or delete a blog post, in addition to adding video suggestions and links.
- Authentication tokens are designed to live for 30 seconds and refresh automatically with a refresh token that lives for a week, the json web token secret key are stored in a config folder which is ignored in this repository.
