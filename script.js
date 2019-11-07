// @ts-check

const list = document.querySelector(".list");
const listItem = document.querySelector(".list__item");
const listTextOld = document.querySelector(".list__text");
const btnClear = document.querySelector(".button-clear-completed");
const itemsLeft = document.querySelector(".items-left");
const btnAll = document.querySelector(".nav-button--all");
const btnActive = document.querySelector(".nav-button--active");
const btnCompleted = document.querySelector(".nav-button--completed");
const form = document.querySelector("form");

const toggleClass = event => {
  event.classList.toggle("list__item--completed");
  updateUi();
};

//remove item
const removeItem = event => {
  list.removeChild(event);
  updateUi();
};

//items left
const updateUi = () => {
  const leftItem = list.querySelectorAll(
    ".list__item:not(.list__item--completed)"
  );
  const total = leftItem.length;
  itemsLeft.innerHTML = `${total} items left`;
};

updateUi();

// on form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.querySelector("input");

  if (!input.value) {
    return alert("Add item in list");
  }

  //create element
  const buttonCheck = document.createElement("button");
  buttonCheck.classList.add("button", "button--check");
  buttonCheck.innerHTML = "&#10003;";
  //const buttonCheck1 = document.querySelector('.button--check');

  buttonCheck.addEventListener("click", event =>
    toggleClass(event.target.parentElement)
  );

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("button", "button--delete");
  buttonDelete.innerHTML = "X";
  //const buttonDelete1 = document.querySelector('.button--delete');

  buttonDelete.addEventListener("click", event =>
    removeItem(event.target.parentElement)
  );

  const text = document.createElement("p");
  text.classList.add("list__text");
  text.innerHTML = input.value;

  const li = document.createElement("li");
  li.classList.add("list__item");

  li.appendChild(buttonCheck);
  li.appendChild(buttonDelete);
  li.appendChild(text);

  list.appendChild(li);

  updateUi();

  //alert(input.value);
  input.value = "";
});

btnAll.addEventListener("click", () => {
  list.classList.add("list--all");
  list.classList.remove("list--active");
  list.classList.remove("list--completed");
  btnActive.classList.remove("nav-button--current");
  btnCompleted.classList.remove("nav-button--current");
  btnAll.classList.add("nav-button--current");
});

btnActive.addEventListener("click", () => {
  list.classList.add("list--active");
  list.classList.remove("list--all");
  list.classList.remove("list--completed");
  btnActive.classList.add("nav-button--current");
  btnAll.classList.remove("nav-button--current");
  btnCompleted.classList.remove("nav-button--current");
});

btnCompleted.addEventListener("click", () => {
  list.classList.add("list--completed");
  list.classList.remove("list--all");
  list.classList.remove("list--active");
  btnCompleted.classList.add("nav-button--current");
  btnActive.classList.remove("nav-button--current");
  btnAll.classList.remove("nav-button--current");
});

btnClear.addEventListener("click", event => {
  //const divyArray = […document.querySelectorAll(".list__item--completed")];
  allcomp = [].slice.call(list.querySelectorAll(".list__item--completed"));
  allcomp.filter(allnode => removeItem(allnode));
});
