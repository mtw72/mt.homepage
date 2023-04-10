// Date
const d = new Date();
var day = d.getDay();
var date = d.getDate();
var month = d.getMonth();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
if (date < 10) {
    date = "0" + date;
}
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var today = days[day] + ", " + date + " " + months[month];
document.getElementById("date").innerHTML = today;


// Scroll down button
// Get the button element
var scrollToBottomButton = document.getElementById("scroll-to-bottom");

// Scroll to the bottom of the page when the button is clicked
scrollToBottomButton.onclick = function () {
    window.scrollTo(0, document.body.scrollHeight);
}

