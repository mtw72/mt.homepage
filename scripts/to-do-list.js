// To-do List
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//Load items from local storage if they exist
if (localStorage.getItem("todo")) {
    list.innerHTML = localStorage.getItem("todo");
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write something");
    } else {
        document.getElementById("UL").appendChild(li);

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        // add a click event listener to the close button to remove item
        span.onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            localStorage.setItem("todo", list.innerHTML);
        }

        // attach event listeners to all "close" buttons
        attachCloseListeners();
    }
    document.getElementById("myInput").value = "";
    localStorage.setItem("todo", list.innerHTML);
};

// function to attach event listeners to all "close" buttons
function attachCloseListeners() {
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            localStorage.setItem("todo", list.innerHTML);
        }
    }
}

// call attachCloseListeners function whenever the page loads
attachCloseListeners();