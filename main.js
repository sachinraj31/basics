let titles = document.querySelector("title");
titles.textContent = "basisc html";

let add = document.getElementById("sa");
add.style.color = "green";
add.style.fontWeight = "bold";

let item = document.getElementsByClassName("list-group-item");
item[3].style.backgroundColor = "green";

for (let i = 0; i < item.length; i++) {
  item[i].style.fontWeight = "bold";
}
let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
}
let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility = "hidden";

let second = document.querySelectorAll(".list-group-item");
second[1].style.color = "green";

let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}
