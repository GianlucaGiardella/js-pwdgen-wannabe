const firstName = prompt('What\'s your first name ?');
const lastName = prompt('What\'s your first last name ?');
const favColor = prompt('What\'s your favorite color ?');

const newPassword = firstName + lastName + favColor;

document.getElementById("generated").innerHTML = `Your new password is: ${newPassword}23`;