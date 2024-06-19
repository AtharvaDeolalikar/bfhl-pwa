const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg"
  }
];

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

addApptBtn.addEventListener('click', () => {
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
 
})

const patientListBtn = document.getElementById('patient-list-btn')
patientListBtn.addEventListener('click', () => {
  window.location.href = 'patient-list.html'
})
