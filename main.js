// // let titles = document.querySelector("title");
// // titles.textContent = "basisc html";

// // let add = document.getElementById("sa");
// // add.style.color = "green";
// // add.style.fontWeight = "bold";

// // let item = document.getElementsByClassName("list-group-item");
// // item[3].style.backgroundColor = "green";

// // for (let i = 0; i < item.length; i++) {
// //   item[i].style.fontWeight = "bold";
// // }
// // let li = document.getElementsByTagName("li");
// // for (let i = 0; i < li.length; i++) {
// //   li[i].style.fontWeight = "bold";
// // }
// // let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// // secondItem.style.backgroundColor = "green";

// // let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// // thirdItem.style.visibility = "hidden";

// // let second = document.querySelectorAll(".list-group-item");
// // second[1].style.color = "green";

// // let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
// // for (let i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = "green";
// // }
// // let itemList = document.querySelector("#items");
// // console.log(itemList.parentElement);

// // console.log(itemList.lastElementChild);
// // console.group(itemList.lastChild);
// // console.log(itemList.firstElementChild);
// // console.log(itemList.firstChild);
// // console.log(itemList.nextSibling);
// // console.log(itemList.nextElementSibling);
// // console.log(itemList.previousSibling);
// // console.log(itemList.previousElementSibling);

// // let newD = document.createElement("div");
// // let newDivTe = document.createTextNode("HEllo");
// // newD.style.fontSize = "30px";
// // newD.style.fontWeight = "bold";
// // newD.appendChild(newDivTe);
// // let container = document.querySelector("header .container");
// // let h1 = document.querySelector("header #header-title");
// // container.insertBefore(newD, h1);
// // console.log(newD);

// // let newDiv = document.createElement("div");
// // let newDivText = document.createTextNode("HEllo");

// // newDiv.style.fontSize = "30px";
// // newDiv.style.fontWeight = "bold";

// // let main = document.querySelector("div #items");
// // let before = document.querySelector("div .list-group-item");
// // main.insertBefore(newDiv, before);
// // console.log(newDiv);

// var form = document.getElementById("addForm");

// var itemList = document.getElementById("items");

// var filter = document.getElementById("filter");

// // Form submit event

// form.addEventListener("submit", addItem);

// // // Delete event

// itemList.addEventListener("click", removeItem);

// // // Filter event

// // filter.addEventListener("keyup", filterItems);

// // Add item

// function addItem(e) {
//   e.preventDefault();

//   // Get input value

//   var newItem = document.getElementById("item").value;

//   var newdes = document.getElementById("description").value;

//   // Create new li element

//   var li = document.createElement("li");

//   // Add class

//   li.className = "list-group-item";

//   // Add text node with input value

//   li.appendChild(document.createTextNode(newItem));

//   li.appendChild(document.createTextNode(newdes));

//   // Create del button element

//   var editBtn = document.createElement("button");

//   var deleteBtn = document.createElement("button");

//   //Add classes to del button

//   editBtn.className = "btn btn-edit btn-#ccc float-right edit";

//   deleteBtn.className = "btn btn-danger btn-sm float-right delete";

//   // Append text node

//   editBtn.appendChild(document.createTextNode("EDIT"));

//   deleteBtn.appendChild(document.createTextNode("X"));

//   // Append button to li

//   li.appendChild(editBtn);

//   li.appendChild(deleteBtn);

//   // Append li to list

//   itemList.appendChild(li);
// }

// // Remove item

// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure?")) {
//       var li = e.target.parentElement;

//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items

// function filterItems(e) {
//   //convert text to lowercase

//   var text = e.target.value.toLowerCase();

//   // Get all lis

//   var lis = itemList.getElementsByTagName("li");

//   //  Convert to an array

//   Array.from(lis).forEach(function (item) {
//     var itemName = item.firstChild.textContent;

//     var desName = item.childNodes[1].textContent;

//     if (
//       itemName.toLowerCase().indexOf(text) != -1 ||
//       desName.toLowerCase().indexOf(text) != -1
//     ) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
let form = document.getElementById("my-form");
form.addEventListener("submit", addForm);

function addForm(e) {
  e.preventDefault();
  // add email and name
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let user = document.getElementById("users");
  let manyUser = document.getElementById("many-users");
  let btn = document.createElement("div");
  let delBtn = document.createElement("button");
  delBtn.id = "del";
  dispatchEvent.id = "btn";
  delBtn.setAttribute("type", "submit");

  let li = document.createElement("li");
  li.className = "iList";

  user.appendChild(btn);
  console.log(delBtn);
  console.log(delBtn.nextSibling);

  let y = li.appendChild(document.createTextNode(nameInput));
  let x = li.appendChild(document.createTextNode(emailInput));
  let z = delBtn.appendChild(document.createTextNode("x"));
  user.appendChild(y);
  user.appendChild(x);
  user.appendChild(z);
  // manyUser.appendChild(y);
  // manyUser.appendChild(x);
  user.insertBefore(y, manyUser);
  user.insertBefore(x, manyUser);
  user.insertBefore(z, btn);

  //correct format
  // let nameInput = document.getElementById("name").value;
  // let email = document.getElementById("email").value;

  // let contact = { name: nameInput, email: email };

  // localStorage.setItem("contact", JSON.stringify(contact));
  let userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  //Storing the previous local storage data
  let storedData = localStorage.getItem("userData");

  if (storedData) {
    storedData = JSON.parse(storedData);
    storedData.push(userData);
    localStorage.setItem("userData", JSON.stringify(storedData));
  } else {
    let dataArray = [];
    dataArray.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataArray));
  }
}

// // Get input value

// var newItem = document.getElementById("item").value;

// var newdes = document.getElementById("description").value;

// // Create new li element

// var li = document.createElement("li");

// // Add class

// li.className = "list-group-item";

// // Add text node with input value

// li.appendChild(document.createTextNode(newItem));

// li.appendChild(document.createTextNode(newdes));

// // Create del button element

// var editBtn = document.createElement("button");

// var deleteBtn = document.createElement("button");

// //Add classes to del button

// editBtn.className = "btn btn-edit btn-#ccc float-right edit";

// deleteBtn.className = "btn btn-danger btn-sm float-right delete";

// // Append text node

// editBtn.appendChild(document.createTextNode("EDIT"));

// deleteBtn.appendChild(document.createTextNode("X"));

// // Append button to li

// li.appendChild(editBtn);

// li.appendChild(deleteBtn);

// // Append li to list

// itemList.appendChild(li);

// // Remove item

// function removeItem(e) {
//   if (e.target.classList.contains("delete")) {
//     if (confirm("Are You Sure?")) {
//       var li = e.target.parentElement;

//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items

// function filterItems(e) {
//   //convert text to lowercase

//   var text = e.target.value.toLowerCase();

//   // Get all lis

//   var lis = itemList.getElementsByTagName("li");

//   //  Convert to an array

//   Array.from(lis).forEach(function (item) {
//     var itemName = item.firstChild.textContent;

//     var desName = item.childNodes[1].textContent;

//     if (
//       itemName.toLowerCase().indexOf(text) != -1 ||
//       desName.toLowerCase().indexOf(text) != -1
//     ) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// >>>>>>> 9018c04ab407f3abf8a4e9640c052f75a528d68c
// }
