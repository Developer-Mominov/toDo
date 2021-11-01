// o`zgaruvchilani elon qilamiz
let button = document.querySelector("button");
let input1 = document.querySelector("input[type=text]");
let main = document.querySelector(".text");
let arr = [];

// window yuklanganda tekshiradi agar localstorage da
// biror malumot bo`sa uni ekranga chqaradi
window.addEventListener("load", () => {
  if (localStorage.getItem("array") != "") {
    // localstorage dan malumot olamiz
    let data2 = localStorage.getItem("array");
    arr = data2.split(",");
    start();
  }
});

button.addEventListener("click", function () {
  if (input1.value != "") {
    arr.unshift(input1.value);
    // localstorage ga malumot yuklimiz
    localStorage.setItem("array", arr);
    input1.value = "";
  } else {
    alert("input is empty!");
  }
  start();
});

// start funksiyasi asosiy funksiya u element qo`shish uchun funksiya chaqiradi
// edit va remove funksiyalarini bajaradi
function start() {
  let data = localStorage.getItem("array");
  arr = data.split(",");
  // element yasashi uchun funksiya chaqirib unga arr ni parametr qb beramiz
  let newobject2 = render(arr);
  newobject2 = newobject2.join("");
  // yangi elementni htmlga qo`shamiz
  main.innerHTML = newobject2;
  // o`zgaruvchilarni bu yerda e'lon qilamiz chunki
  // element yasalgandan keyingina bu nomli o`zgaruvchilar paydo bo`ladi
  // va har safar nodelistga qo`shib boriladi
  let del = document.querySelectorAll("#del");
  let edit = document.querySelectorAll("#edit");

  // edit funksiyasi
  edit.forEach((e, index) => {
    e.addEventListener("click", (event) => {
      input1.value = event.target.parentElement.firstElementChild.textContent;
      event.target.parentElement.remove();
      let r = arr.indexOf(
        event.target.parentElement.firstElementChild.textContent
      );
      if (r !== -1) {
        arr.splice(r, 1);
        localStorage.setItem("array", arr);
      }
    });
  });
  // remove funksiyasi
  del.forEach((e, index) => {
    e.addEventListener("click", (event) => {
      event.target.parentElement.remove();
      let r = arr.indexOf(
        event.target.parentElement.firstElementChild.textContent
      );
      if (r !== -1) {
        arr.splice(r, 1);
        localStorage.setItem("array", arr);
      }
    });
  });
}

//render uchun element yasovchi funksiya yani html skletni yasab beradi
function render(array) {
  let newobj = array.map((e) => {
    return (
      "<div class='new'><p>" +
      e +
      "</p><img src='./remove.svg' id='del'/> <img src='./edit.svg' id='edit'/> </div>"
    );
  });
  return newobj;
}
