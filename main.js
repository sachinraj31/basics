// let titles = document.querySelector("title");
// titles.textContent = "basisc html";

// let add = document.getElementById("sa");
// add.style.color = "green";
// add.style.fontWeight = "bold";

// let item = document.getElementsByClassName("list-group-item");
// item[3].style.backgroundColor = "green";

// for (let i = 0; i < item.length; i++) {
//   item[i].style.fontWeight = "bold";
// }
// let li = document.getElementsByTagName("li");
// for (let i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
// }
// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.backgroundColor = "green";

// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.visibility = "hidden";

// let second = document.querySelectorAll(".list-group-item");
// second[1].style.color = "green";

// let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
// }
// let itemList = document.querySelector("#items");
// console.log(itemList.parentElement);

// console.log(itemList.lastElementChild);
// console.group(itemList.lastChild);
// console.log(itemList.firstElementChild);
// console.log(itemList.firstChild);
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// let newD = document.createElement("div");
// let newDivTe = document.createTextNode("HEllo");
// newD.style.fontSize = "30px";
// newD.style.fontWeight = "bold";
// newD.appendChild(newDivTe);
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header #header-title");
// container.insertBefore(newD, h1);
// console.log(newD);

// let newDiv = document.createElement("div");
// let newDivText = document.createTextNode("HEllo");

// newDiv.style.fontSize = "30px";
// newDiv.style.fontWeight = "bold";

// let main = document.querySelector("div #items");
// let before = document.querySelector("div .list-group-item");
// main.insertBefore(newDiv, before);
// console.log(newDiv);

let form = document.getElementById("addForm");
let item = document.getElementById("items");

form.addEventListener("submit", addItem);
item.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();
  let formInput = document.getElementById("item").value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(formInput));
  let delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm float-right delete";
  delBtn.appendChild(document.createTextNode("x"));
  li.appendChild(delBtn);
  item.appendChild(li);
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}
