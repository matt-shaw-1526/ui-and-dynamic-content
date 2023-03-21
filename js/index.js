// Save the reference to text-field into a variable. | <input type="text">
let ui = document.getElementById("user-input");

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button>
let btn = document.getElementById("add");

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>

let ul = document.querySelector("#list");

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let pg = document.getElementById("feedback");

// Creating function "addItem"
function addItem() {
  // Check if user entered the value in input text-field.
  if (ui.value.length > 0) {
    // Create list-item and store output in a variable.
    let li = document.createElement("li");
    // Use textContent property on created list-item
    // and assign it with the value of the text written in the text-field
    li.textContent = ui.value;
    // Append list item to unordered list.
    ul.appendChild(li);
    //Clear feedback message
    pg.textContent = "Item entered";
    // Clear the text-field.
    ui.value = "";
    // Put the cursor back to text-field
    ui.focus();
  } else {
    pg.textContent = "Nothing entered!";
    pg.value = "";
  }
}

// Assigning a click-event to the event-target-object
btn.addEventListener("click", addItem);
