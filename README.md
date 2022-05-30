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

# Running The App Locally #

## Requirements ##

- A computer connected to eduroam (UCLA wifi).
- Preferrably, VS Code. 

## Detailed Steps ##

1. Navigate to the repository page and press the green `Code` button. Copy the HTTP request URL. 
2. Open up VS Code (or the editor/terminal of your choice). Open a terminal. Type `git clone {url of repository}` to the terminal of your choice (VS Code is what I use, but you can use whatever you want). (ALTERNATIVELY: In VS code, you can also use `ctrl-shift-p` and type in git clone, and an option to do so should come up.) 
3. Once you have done this, `cd` into the new folder (entitled CS-35L-Bruin-Tunes) and type in `npm install`. This installs the dependencies of the project (outlined in package.json). 
4. `Cd` to the directory `backend`. Type `npm install` to install the dependencies for the backend. 
5. Add a file called `config.env` to the `backend` folder. Follow the format of `.env.sample` but replace \<username\> with the username for MongoDB and \<password\> with the password for MongoDB (we will provide the credentials for this/perhaps the file itself). 
6. Type `npm run server` in `backend` to start running the server and database. If done successfully, you should see the following:

      > Server is running on port: 5000
      > 
      > Successfully connected to MongoDB.
      > 
   The above *does* restart the server every time you make a change to the files in the server (because of `nodemon`). If you don't want this to happen, type `node 
   server.js` instead.
7. Execute the following command: `cd ..` to go back to the original directory (aka frontend). Finally, type `npm start` to run the project in your browser. 

