let task = [];
let pt;
let sub = document.querySelector("[type=submit]");
let inp = document.querySelector(".inp");
let tasks = document.querySelector(".tasks");
let star;

let tar = 0;

sub.onclick = () => {
  if (inp.value !== "") {
    pt = inp.value;
    let str = Array.from(pt, (element) =>
      element === "," ? "|" : element
    ).join("");
    task.push(str);
    window.localStorage.t = task;
    tasks.innerHTML += `<div class=task><div class=p>${pt}</div>
    <div class=dd><i class='fas fa-star' data-color=black ></i><button class=delete>Delete</button></div>
    </div>`;
    tasks.style.cssText = "padding:24.2px;";
    inp.value = "";
  }
};

document.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    let star = e.target.previousElementSibling;
    let par = e.target.parentElement.parentElement;
    if (star.dataset.color === "yellow") {
      let st = +window.localStorage.star;
      st--;
      window.localStorage.star = st;
    }
    par.remove();

    task = [];

    if (tasks.children.length === 0) {
      let w = document.querySelector(".form").clientWidth;
      tasks.style.cssText = `width:${w}px; height:40px`;
      window.localStorage.t = "";
    } else {
      let ps = document.querySelectorAll(".task .p");

      for (let i = 0; i < ps.length; i++) {
        task.push(ps[i].innerHTML);
      }

      window.localStorage.t = task;
    }
  }
});
let staar = 0;
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-star")) {
    if (e.target.dataset.color !== "yellow") {
      let par = e.target.parentElement.parentElement;
      par.remove();
      tasks.prepend(par);
      let ps = document.querySelectorAll(".task .p");
      task = [];
      for (let i = 0; i < ps.length; i++) {
        let str = ps[i].textContent.split("");
        str = str
          .map((element) => {
            return element === "," ? "|" : element;
          })
          .join("");
        task.push(str);
      }
      if (typeof window.localStorage.star === "undefined") {
        window.localStorage.star = 1;
      } else {
        let st = window.localStorage.star;
        st++;
        window.localStorage.star = st;
      }
      window.localStorage.t = task;
      e.target.dataset.color = "yellow";
      e.target.style.color = e.target.dataset.color;
    } else {
      let par = e.target.parentElement.parentElement;
      par.remove();
      tasks.append(par);
      let ps = document.querySelectorAll(".task .p");
      task = [];
      for (let i = 0; i < ps.length; i++) {
        task.push(ps[i].innerHTML);
      }
      e.target.dataset.color = "black";
      e.target.style.color = e.target.dataset.color;
      let st = +window.localStorage.star;
      st--;
      window.localStorage.star = st;
      window.localStorage.t = task;
    }
  }
});

if (window.localStorage.t) {
  let a = window.localStorage.t;
  a = a.split(",");

  (".dd i");
  for (let i = 0; i < a.length; i++) {
    pt = a[i];
    let str = Array.from(pt, (element) =>
      element === "|" ? "," : element
    ).join("");
    tasks.innerHTML += `<div class=task><div class=p>${pt}</div>
    <div class=dd><i class='fas fa-star' data-color=black ></i><button class=delete>Delete</button></div>
    </div>`;
    tasks.style.cssText = "padding:24.2px ;";
    let z = document.querySelectorAll(".fas");

    if (i < window.localStorage.star) {
      z[i].style.color = "yellow";
      z[i].dataset.color = "yellow";
    }
  }
} else {
  let w = document.querySelector(".form").clientWidth;
  tasks.style.cssText = `width:${w}px; height:40px`;
}
window.addEventListener("resize", () => {
  if (tasks.children.length === 0 || !window.localStorage.t) {
    let w = document.querySelector(".form").clientWidth;
    tasks.style.cssText = `width:${w}px; height:40px`;
  }
});
// let blob = new Blob(["dassdassddasdad"], { type: "TXT" });
// let url = URL.createObjectURL(blob);
// let lin = document.createElement("a");
// lin.download = "bahaa";
// lin.href = url;
// lin.click();
/*
i can use object and store tasks in array of object 
[{title,id,completed}]
id for delete
and filter array of tasks uing id and store in local storage
store in local storage using  jsonstringify
and get from localStoreage using jsonparse
and put parse value if !="" in arrray of tasks

*/
