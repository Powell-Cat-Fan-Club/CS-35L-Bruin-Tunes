# CS 35L: BruinTunes #

## Description ##

Spotify is good, but it could be better. Imagine a platform where you could discuss your favorite artists and music with other people in addition to listening to your favorite songs. Introducing… BruinTunes™!!! BruinTunes is like Spotify, but better. You can share your unique perspectives on diverse genres of music and discuss your favorite artists and albums with like-minded people. 

BruinTunes will be a web-based application that hosts the links to your favorite music on its platform, along with a few other features. You can find some of the most popular artists through tags like genres, decade, and more. Additionally, you can comment on and like certain artists and their songs, as well as like other people’s comments. Finally, you can make lists and rankings of your favorite music, although this won’t be tied to an account.

Our motivation for this project is to create a platform for UCLA students to share their music with each other. As music lovers ourselves, we want a platform where anyone can find information about new artists and discover new songs. Spotify is great for listening to music and making playlists. However, there’s no good way to comment on and make lists of your favorite music. Additionally, with YouTube’s choice to remove comments on “Artist - Topic” channels, it’s a lot harder to be social with your music. Music is one way of communicating with other people, and that’s a void BruinTunes will fill. 

URL: https://bruin-tunes.netlify.app/

Presentation: https://docs.google.com/presentation/d/121z6iYHIRhVZNSSGnWJe31WjPpr1TFVn1kajY_EQfko/edit?usp=sharing

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

# Citations # 
<details>
  <summary> Citation 1 </summary>
    <p> Title: MERN Stack Tutorial </p>
    <p> Author: MongoDB </p>
    <p> Date: 2022 </p>
    <p> Availability: https://www.mongodb.com/languages/mern-stack-tutorial </p>
    <p> Usage: Framework for backend section (not all routes though for record.js) </p>
</details>
<details>
    <summary> Citation 2 </summary>
      <p> Title: How to create a multi-page website using React.js ? </p>
      <p> Author: namanjaingeeksforgeeks </p>
      <p> Date: 2022 </p>
      <p> Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/ </p>
      <p> Usage: General Structure for most frontend files </p>
</details>
<details>
  <summary> Citation 3 </summary>
      <p> Title: styled-components-responsive-navbar </p>
      <p> Author: machadop1407 </p>
      <p> Date: 2021 </p>
      <p> Availability: https://github.com/machadop1407/styled-components-responsive-navbar </p>
      <p> Usage: Base Structure of repsonsive navbar </p>
</details>
<details>
  <summary> Citation 4 </summary> 
      <p> Title: Dynamically import images from a directory using webpack </p>
      <p> Author: klinore </p>
      <p> Date: 2017 </p>
      <p> Availability: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack </p>
      <p> Usage: Import images from folder for gallery in About page </p>
</details>
<details>
  <summary> Citation 5 </summary>
      <p> Title: Tutorial [For React Router] </p>
      <p> Author: React Router </p>
      <p> Date: 2022 </p>
      <p> Availability: https://reactrouter.com/docs/en/v6/getting-started/tutorial </p>
      <p> Usage: Portions of router-related things for Artists </p>

  <summary> Citation 6 </summary> </p> 
      <p> Title: How to prevent useEffect from running on mount in React </p>
      <p> Author: Nick Scialli </p>
      <p> Date: 2022 </p>
      <p> Availability: https://typeofnan.dev/how-to-prevent-useeffect-from-running-on-mount-in-react/ </p>
      <p> Usage: Useeffect portions of artists.pages </p>
</details>
<details>
  <summary> Citation 7 </summary> 
      <p> Title: react-youtube demo </p>
      <p> Author: Kevin Cunningham </p>
      <p> Date: 2021 </p>
      <p> Availability: https://codesandbox.io/s/f6l29?file=/src/App.js </p>
      <p> Usage: YouTube player for songs </p>
</details>
<details>
  <summary> Citation 8 </summary> 
      <p> Title: MERN Stack — The Old Facebook Comment Box Tutorial except 2018 </p>
      <p> Author: Bryan Gilbraith </p>
      <p> Date: 2018 </p>
      <p> Availability: https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImIxYTgyNTllYjA3NjYwZWYyMzc4MWM4NWI3ODQ5YmZhMGExYzgwNmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTI2OTE0NzQsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjM1ODEwMDg5NDUwMzg1NTgyMCIsImVtYWlsIjoidHJhbmJyYW5kb24xMjMzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiQnJhbmRvbiBUcmFuIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBVFhBSnpJTWtQMDgtYWtUa21xbWx4WjRpbnZLa0lMNmhDX3dUQ2Z5b1BYPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkJyYW5kb24iLCJmYW1pbHlfbmFtZSI6IlRyYW4iLCJpYXQiOjE2NTI2OTE3NzQsImV4cCI6MTY1MjY5NTM3NCwianRpIjoiNDAzMDcwYmNkNDE1ODAzMzViOWIwOGZjN2NjMGVhNTY5NGIwNmE2NCJ9.vSP6W39nUpqtkfk2u80lcAV6Ot-E8p1zktP-PDKwUAAcYhNPMnNCJPFlvQh8CQURTPSbnoGHqBrdwymdE93dxarmWyjS0fOWxKzY_pWdzUYGiw3l6e1oGelAMrMgWGXArHSXP26QIwDKXTfiHPFDFIJ1jya7BHq_neFI5hS2ZU_ivvQ_nIdtIZcDzbIrGUG9o7dTpRdhvB4jVEyDTMs6vhTBLo-TZ-vcpp6kBEQdltikcR4QuAVVT4k75Qji-qJLKRpCOjX96CA02Ff2tfT9HywxCBNzUbr5xT214KlTaR8U9v8-kheffs2EHDJeAvvoB5UGGEU4M8c6K7LH_AioIg </p>
      <p> Usage: Structure of comments </p>
</details>
<details>
  <summary> Citation 9 </summary>
    <p> Title: How To Deploy a Full-Stack MERN App with Heroku/Netlify </p>
    <p> Author: Nick </p>
    <p> Date: 2020 </p>
    <p> Availability: https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb</p>
    <p> Usage: Used to deploy website </p>
</details>
