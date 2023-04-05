const firstName = prompt('What\'s your first name ?');
const lastName = prompt('What\'s your last name ?');
const favoriteColor = prompt('What\'s your favorite color ?');

const newPassword = firstName + lastName + favoriteColor;

document.getElementById("generated").innerHTML = `Your new password is: ${newPassword}23`;