let userData = [
    {
        name: "Username",
        password: "Password",
        likes: [],
        comments: [],
    },
    {
        name: "test1",
        password: "1234567890",
        likes: [],
        comments: [],
    },
    {
        name: "woooooooooooooooooooooooo",
        password: "53ceRt",
        likes: [],
        comments: [],
    },
]

export function findUser(userID) {
    return userData.find( ({ name }) => name === userID );
}

export function addUser(userID, userPass) {
    var newProfile = {
    	name: userID, 
    	password: userPass,
        likes: [],
        comments: [],
    }
    userData.push(newProfile);
}