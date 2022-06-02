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

## Detailed Steps ##

1. Install `npm` on your machine. 
2. Install node via `npm`. 
3. Use `git clone https://github.com/Powell-Cat-Fan-Club/CS-35L-Bruin-Tunes.git` to clone the repository.
4. Inside the CS-35L-Bruin-Tunes folder created by step 3, type `npm install` to install the dependencies for frontend.
5. Execute the command `cd backend` to navigate to the backend folder. Inside the backend folder, type `npm install` to install the dependencies for backend.
6. Type `npm start server` in the backend folder to start running the server and database. If done successfully, you should see the following:

      > Server is running on port: 5000
      > 
      > Successfully connected to MongoDB.
      > 
7. In a separate shell, type `npm start` to run the project in your browser (you should be in the CS-35L-Bruin-Tunes folder). This should automatically open the app in your browser, but if it does not, open your browser and go to `http://localhost:3000/`.

## Troubleshooting ##

- If for any reason you cannot connect to the database, it may be that the database does not like your IP address. It should be set up to connect from anywhere, but for some reason MongoDB seems to be finicky about this. Please contact the team of BruinTunes if you run into this issue/move to eduroam wifi. 
