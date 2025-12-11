// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";

mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.

toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

function highlightListItems(){
    const listItems = document.querySelectorAll('li'); //Use **`document.querySelectorAll('li')`** to select all list items in the `item-list`.
    listItems.forEach(li => { //`forEach` to iterate through the list.
        li.style.color = "blue"; //Set the inline style `color` of each item to `"blue"`.
    });
}

highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

function toggleStatus(e) { //Task 5: function named `toggleStatus` that accepts an event object `e`
    e.preventDefault(); // Task 6: Stop the anchor link from refreshing or jumping the page.
    //Task 5: select the `div` with ID `status-output`.
    statusOutput.classList.toggle("hidden"); // Task 5: Use **`classList.toggle()`** to add or remove the class `.hidden`.

    //Task 7: Update `toggleStatus` to check if the status `div` is visible (i.e., does _not_ have the `.hidden` class).
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow"; // If visible: Set the `main-title` element's **`style.backgroundColor`** to `"yellow"`
        createTimestamp(); //Task 8
    } else {
        mainTitle.style.backgroundColor = ""; //If hidden: Reset the background color to an empty string `""`
    } 
}
toggleButton.addEventListener("click", toggleStatus); //Task 5: **event listener** to the `toggle-button` that runs `toggleStatus` on a **`click`** event.

//Task 8: Create a helper function `createTimestamp()`. Call this function inside `toggleStatus` whenever the status becomes visible.
function createTimestamp() {
    const span = document.createElement("span"); //Use **`document.createElement("span")`** to create a new span.
    span.innerHTML = new Date().toLocaleTimeString(); //Set its inner HTML to the current time (e.g., `new Date().toLocaleTimeString()`).
    statusOutput.appendChild(span); //Use **`appendChild()`** to add the span _inside_ the `status-output` div.
}

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

function startFlashing(){
    intervalId =  setInterval(() => { //uses **`setInterval`** to toggle the `.hidden` class on the `control-panel` every **500ms**. Store the ID returned by `setInterval` in a global variable.
        controlPanel.classList.toggle("hidden");
    }, 500);
}

function stopFlashing(){
    clearInterval(intervalId); // Create a function `stopFlashing()` that uses **`clearInterval()`** to stop the animation
}

timerButton.addEventListener("click", startFlashing); //Bind `startFlashing` to the `timer-button` **click** event.
timerButton.addEventListener("dblclick", stopFlashing); //Bind `stopFlashing` to the `timer-button` **dblclick** (double click) event.