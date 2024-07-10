//selecting popups and overlay to display while click add button

let popupOverlay = document.querySelector(".popupOverlay");
let popupBox = document.querySelector(".popupBox");
let addPopupShow = document.getElementById("addPopupShow");

addPopupShow.addEventListener("click", () => {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
})

//selecting cancel button to comeout from popup

let cancelPopup = document.getElementById("cancelPopup");

cancelPopup.addEventListener("click", (event) => {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
})

//selecting container,addBook,bookTitleInput,bookAuthorInput,bookDescInput

let container = document.querySelector(".container");
let addBook = document.getElementById("addBook");
let bookTitleInput = document.getElementById("bookTitleInput");
let bookAuthorInput = document.getElementById("bookAuthorInput");
let bookDescInput = document.getElementById("bookDescInput");

addBook.addEventListener("click", (event) => {
    event.preventDefault();
    let div = document.createElement("div");
    div.setAttribute("class","bookContainer");
    div.innerHTML = `<h2>${bookTitleInput.value}</h2>
                    <h4>${bookAuthorInput.value}</h4>
                    <p>${bookDescInput.value}</p>
                    <button onclick="bookDelete(event)">Delete</button>`;
    container.append(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
})

//delete book info's

function bookDelete(event){
    event.preventDefault();
    event.target.parentElement.remove();
}

