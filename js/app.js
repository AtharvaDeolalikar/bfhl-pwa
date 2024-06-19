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
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("docName");
  text.innerText = urlParams.get('name') ?? "Atharva"
});

const addApptBtn = document.getElementById('add-appt-btn')
const loaderElm = document.getElementById('loader')

addApptBtn.addEventListener('click', (e) => {
  // let progress = 0
  // let interval = setInterval(() => {
  //   loaderElm.style.width = progress + '%'
  //   progress += 5
  //   if(progress >= 105){
  //     clearInterval(interval)
  //     window.location.href = 'add-appt.html'
  //   }
  // }, 10)

  window.location.href = 'add-appt.html'
  e.stopPropagation()
})

const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')
overlay.addEventListener('click', () => {
  popup.style.display = 'block'
})

const patientListBtn = document.getElementById('patient-list-btn')
patientListBtn.addEventListener('click', (e) => {
  window.location.href = 'patient-list.html'
  e.stopPropagation()
})
