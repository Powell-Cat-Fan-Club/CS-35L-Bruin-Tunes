export function findUser(userID, passID, users) {
  if (users == undefined) {
    return undefined; 
  }
    for (var i = 0; i < users.length; i++)
      {
        if (users[i].password === passID & users[i].username === userID)
        {
          return users[i];
        }
      }
      return undefined;
};

export function findUsername(userID, users) {
  if (users == undefined) {
    return undefined; 
  }
  for (var i = 0; i < users.length; i++)
    {
      if (users[i].username === userID)
      {
        return users[i];
      }
    }
  return undefined;
};

export function isLoggedIn(users) {
  if (users == undefined) {
    return undefined; 
  }
  for (var i = 0; i < users.length; i++)
    {
      if (users[i].isloggedin === true) {
        return users[i]; 
      }
    }
  return undefined;
}