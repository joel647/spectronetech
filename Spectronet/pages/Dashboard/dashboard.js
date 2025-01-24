let  user =  {
    firstName:'joel',
    lastName:'adeagbo',
}

const welcomeMessage = `Welcome back, ${user.firstName} ${user.lastName}!`;



document.getElementById('welcomeMessage').textContent = welcomeMessage;
console.log(welcomeMessage)


