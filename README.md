# file-uploading-node

## Usage
Firstly run bin/www, after the server is running, go to the main page: http://localhost:3000/.  
  
Click 'choose file' and then 'submit' to upload a file.  
  
The page will then show the files list and URL.

## Explanation
Use MVC structure
### routes
* mainRoute.js: routing for main page and ajax API
* uploadFileRoute.js: routing for uploading files

### controllers
* mainController: matching with routes/mainRoute.js, read file information and response to view layer.

### views
* mainPage.ejs: main page to show when user asking, using EJS template, get data through back end rendering.
* public/javascript/mainPage.js: main javascript, for handling submit event, sending upload request and appending returned files info.
* public/stylesheets/mainPageStyle.css: css file of mainPage

## Third Party
* express: https://www.npmjs.com/package/express
* multer: https://github.com/expressjs/multer
* jQuery: https://jquery.com/




