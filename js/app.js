const container = document.querySelector(".container");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

// document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const docName = document.getElementById("docName");
  if (docName) {
    docName.innerText = urlParams.get("name") ?? "Atharva";
  }
});

const addApptBtn = document.getElementById("add-appt-btn");
const loaderElm = document.getElementById("loader");

addApptBtn &&
  addApptBtn.addEventListener("click", (e) => {
    // let progress = 0
    // let interval = setInterval(() => {
    //   loaderElm.style.width = progress + '%'
    //   progress += 5
    //   if(progress >= 105){
    //     clearInterval(interval)
    //     window.location.href = 'add-appt.html'
    //   }
    // }, 10)

    window.location.href = "add-appt.html";
    e.stopPropagation();
  });

const popup = document.getElementById("popup");

const patientListBtn = document.getElementById("patient-list-btn");
patientListBtn &&
  patientListBtn.addEventListener("click", (e) => {
    window.location.href = "patient-list.html";
    e.stopPropagation();
  });

document.addEventListener("click", function (event) {
  let excludedDivs = document.querySelectorAll(".btn");
  let clickedExcludedDiv = false;

  excludedDivs.forEach(function (div) {
    if (div.contains(event.target)) {
      clickedExcludedDiv = true;
    }
  });

  // alert('detected')

  if (!clickedExcludedDiv) {
    if (popup.style.display == "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  }
});
