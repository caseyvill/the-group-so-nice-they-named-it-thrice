Project-Barbosa
===============

####Installation:

1. Clone the git repo
2. Install [Node.js](http://nodejs.org/)
3. Install all the modules necessary
⋅⋅* run the following command from the project directory to install all the necessary modules
`npm install`
4. Install [nodemon](http://nodemon.io/) (automatically reloads the node app when you save changes to a file)
`npm install -g nodemon`
5. Install node-insepctor to help with debugging
`npm install -g node-inspector`
6. To test the app: Start the Node Server (with nodemon) `nodemon app.js`
7. To test the app: Go to the site that Node says it's running on (default 3000) `localhost:3000`

Now you should be good to go!

### Tips
node-inspector can be used as a debugger, make sure to use the debug flag
'nodemon --debug app.js' Then in a new terminal run 'node-inspector' to start the debugger and open the link provided by the terminal to view the debugger. It should be a webpage with the Inspector from Chrome.
____
