//  loggedInUser = {
//     id: 1,
//     name: "Bryan",
//     email: "bryan@bn.com",
//     isAdmin: true
//   }
let loggedInUser = {};

export const getLoggedInUser = () => {
    return loggedInUser;
}

export const logoutUser = () => {
    sessionStorage.removeItem("SOuser")
    loggedInUser = {}
}


export const loginUser = (userObj) => {
    return fetch(`http://localhost:8088/users?name=${userObj.name}&email=${userObj.email}`)
    .then(response => response.json())
    .then(parsedUser => {
      //is there a user?
      if (parsedUser.length > 0){
        window.alert(`Welcome back ${parsedUser[0].name}!`)
        setLoggedInUserSessionStorage(parsedUser[0]);
        return getLoggedInUser();
      }else {
        //no user
       return alert("No user found")
      }
    })
  }

  export const registerUser = (userObj) => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    }

    return fetch(`http://localhost:8088/users`, fetchOptions)
    
  }

export const setLoggedInUserSessionStorage = (userObj) => {
  sessionStorage.setItem("SOuser", JSON.stringify(userObj))
  loggedInUser = userObj;
}

export const setLoggedInUserAppState = (userObj) => {
  loggedInUser = userObj;
}