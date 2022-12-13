// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  menu.classList.toggle("kryds");
  // const menuShown = menu.classList.contains("shown");
  /*
  // spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.classList.add("luk");
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.classList.add("burger");
  }
  */
}

btn.addEventListener("click", toggleMenu);
