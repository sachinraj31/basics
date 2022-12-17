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
