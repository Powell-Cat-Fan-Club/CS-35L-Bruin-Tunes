# CS 35L: BruinTunes #

## Description ##

Spotify is good, but it could be better. Imagine a platform where you could discuss your favorite artists and music with other people in addition to listening to your favorite songs. Introducing… BruinTunes™!!! BruinTunes is like Spotify, but better. You can share your unique perspectives on diverse genres of music and discuss your favorite artists and albums with like-minded people. 

BruinTunes will be a web-based application that hosts the links to your favorite music on its platform, along with a few other features. You can find some of the most popular artists through tags like genres, decade, and more. Additionally, you can comment on and like certain artists and their songs, as well as like other people’s comments. Finally, you can make lists and rankings of your favorite music, although this won’t be tied to an account.

Our motivation for this project is to create a platform for UCLA students to share their music with each other. As music lovers ourselves, we want a platform where anyone can find information about new artists and discover new songs. Spotify is great for listening to music and making playlists. However, there’s no good way to comment on and make lists of your favorite music. Additionally, with YouTube’s choice to remove comments on “Artist - Topic” channels, it’s a lot harder to be social with your music. Music is one way of communicating with other people, and that’s a void BruinTunes will fill. 

## Team Members ##

- Laura Ness (1D)
- Rachel Truong (1D)
- Tiffany Hwang (1D)
- Daniel Zhu (1D) 
- Brandon Tran (1E)

# Notes for Team Members #

## Getting Started ##

1. Navigate to the repository page and press the green `Code` button. Copy the url HTTP request thing.
2. Open up VS Code (or the editor/terminal of your choice). Open a terminal. Type `git clone {url of repository}` to the terminal of your choice (VS Code is what I use, but you can use whatever you want). In VS code, you can also use `ctrl-shift-p` and type in git clone, and an option to do so should come up. 
3. Once you have done this, `cd` into the new folder and type in `npm install`. This installs the dependencies of the project (outlined in package.json). 
4. (Potentially optional, but just in case, do this step anyways) `Cd` to the directory `backend`. Type `npm install` to install the dependencies for the backend. 
5. Add a file called config.env to the `backend` folder. Follow the format of `.env.sample` but replace \<username\> with the username for MongoDB and \<password\> with the password for MongoDB (look at the Discord for details). **Do not commit this file. That will result in a security breanch. If you do, we need to change the password.**
6. Type `npm run server` in `backend` to start running the server and database. If done successfully, you should see the following:

      > Server is running on port: 5000
      > 
      > Successfully connected to MongoDB.
      > 
   The above *does* restart the server every time you make a change to the files in the server (because of `nodemon`). If you don't want this to happen, type `node 
   server.js` instead.
7. `Cd` back to the original directory (aka frontend). Finally, type `npm start` to run the project in your browser. 
Let the Discord know if you have trouble with the above steps.

## Branches ##

Please refer to the [following link](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github) for a full tutorial on branches and pull requests. The following documentation is under construction and may not be completely accurate. When in doubt, refer to the Internet, or ask the Discord.

### Terminal ###

1. In the terminal, if you want to create a branch, you can type `git checkout -b <branch-name>` to create a new branch and navigate to a new branch. Alternatively, you can type `git branch <branch-name>` to create a new branch, and `git checkout` to navigate to the new branch. Make sure your branch name includes your name and the functionality you're working on (i.e. Laura_comments). 
2. You can check that you are in the proper branch with the command `git branch`.
3. Once you have made changes in your terminal, you can add your files to the branch with the command `git add <filename>`. You can also type `git add --all`, which will add all modified or new files. 
4. Commit your changes by typing in `git commit -m "<message>"`. Make sure to add a descriptive commit message!
5. Push yor changes to your fork on GitHub with the following command: `git push --set-upstream origin <branchname>`. 
6. Once you have done this, go to the repository's website on GitHub and create a pull request.

### GitHub ###

You can do all of the above directly in Github, too! Just follow the instructions below:
1. To make a new branch, click on the button with the branch with `main` on it on the front page of the repository. You should see a button that asks you to select a branch to work from, or create a new branch. Select the latter and type in the name of your branch (one with your name and the functionality).
2. Make sure you're in *your* branch and *not* the `main` branch. Now, you can click the `Add files` button and add any files you created or modify files that you modified. If your modifications are incompatible with `main`, Git will also you to manually merge them. **Try to preserve as much of your teammates' code as possible!** Be sure to ask the **Discord** if you're uncertain how you should modify this. 
3. Create a pull request by going to your branch and selecting pull request. 
4. Ask a teammate to push your pull request! (You can do it yourself, but we should have two eyes on any pull requests, just to be sure we don't break anything).
5. Now you've merged your branch with `main`. Be sure to delete your branch afterwards!  

### Keeping Up to Date (Pulling from GitHub) ###

1. In your terminal, type `git pull` to pull from the remote repository to your local repository. This fetches the changes and merges them with your local repository. Be sure to read up on the documentation [here](https://www.atlassian.com/git/tutorials/syncing/git-pull).

### Backend Documentation ###

Follow `Getting Started` to start up the server. If you wish to edit anything in backend, here's a documentation on what you can change (and how you should do it).
- ONLY change the requests you are sending fetch requests to. Do NOT mess with any other requests.
- You can find the requests that you are looking for by reading the comments in `backend/routes/record.js`. Each route should (hopefully) be clear as to its function. Find the route you're looking for by looking for the following heading:

      recordRoutes.route("/path").get(function (req, res)
 
 This is an example of a `get` request. If you're running the server on port 5000, you might invoke this request using the URL `http://localhost:5000/path` and a 
  `get` request. If you want to modify the path URL that invokes this request, just change the `"/path"` string in the function header. This `/path` will be 
  anything past `http://localhost:5000` (or whatever the base URL is). 
- There are four types of requests in the route: `get`, `post`, `put`, and `delete`. `Get` requests get the data from the database. `Post` will add something to the database. `Put` will update the data in the database. `Delete` deletes the data from the database. 
- Each object in the database has a unique identifier. To see that unique ID, you can access MongoDB to look at the database.
- If you want to edit/add parameters to your data object, (1) contact Laura for help, or (2) follow the following documentation:
     1. Follow the above documentation on finding the route you want to edit.
     2. ONLY edit the part of the code that looks like this:

        > username: req.body.username,
        > 
        > title: req.body.title,
        > 
        > comment: req.body.comment,
        > 
        > likes: req.body.likes,
        > 
        You can add/edit parameters in exactly the way you'd expect:
        > newparam: req.body.newparam,
        > 

**WARNING: MINIMALLY change the request. If you change too much or change something incorrectly, it may break.**
If you have further issues connecting to the backend or are confused, please contact Laura about that on Discord.

## Advice ##

Some good advice is:
- Write good commit messages.
- Make a branch every time you want to modify something in `main`. Make sure that you are in your branch and not in the `main` branch!
- Make a branch every time you switch tasks (i.e. if you're working on a css file but want to switch to working on ranking, make a new branch with your name and the functionality that you are working on). 
- When in doubt, look to the internet (or the advice of the TAs!). Ask the **Discord** for help.  

## Requirements ##

- Each team member needs at least **five** commits of substance. What substance means is up to the TAs, but as long as you're actually doing your part and contributing, you should be able to get your commits in. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
