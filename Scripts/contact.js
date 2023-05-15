const card = document.querySelector(".card");
const cardtitle = document.querySelector(".card-title");
const container = document.querySelector(".contact-container");
const icons = document.querySelector(".icons");
const images = document.querySelectorAll(".social");

const linkedin = document.querySelector("#lin");
const mail = document.querySelector("#mail");
const phone = document.querySelector("#phone");

const mailtag = document.querySelector("#mailtag");
const phonetag = document.querySelector("#phonetag");

var display = 1;

/*.
images[0] = document.querySelector(".icons img");
images[1] = document.querySelector(".icons img");
images[2] = document.querySelector(".icons img");
*/

/*.icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;

}*/

/*
function hider() {
  if (icons.style.display === "none") {
    card.style.background = "url(Images/Icons/contact-book-2.png)";

    icons.style.display = "flex";
    icons.style.flexDirection = "column";
    icons.style.gap = "10px";
    icons.style.padding = "10px";
    icons.style.justifyContent = "center";
    icons.style.alignItems = "center";
    icons.style.transformStyle = "preserve-3d";

    container.style.top = "72vh";

    images.forEach((elements) => (elements.style.width = "30px"));
    images.forEach((elements) => (elements.style.draggable = "false"));
    images.forEach((elements) => (elements.style.cursor = "pointer"));
  } else {
    card.style.background = "url(Images/Icons/contact-book-1.png)";
    icons.style.display = "none";
  }
}*/
const copy = async (element) => {
  var text = element.getAttribute("alt");
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
    alert("Copied");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const opencontacts = () => {
  card.addEventListener("click", () => {
    card.classList.toggle("card-opned");
    icons.classList.toggle("icons-visible");
    images.forEach((element) => {
      element.classList.toggle("social-visible");
    });
  });
};

const closecontacts = () => {
  card.addEventListener("click", () => {
    if (card.classList.contains("card-opned")) {
      cardtitle.style.transition = "all ease 0.5s";
      cardtitle.setAttribute("data-title", "Close");
    } else {
      cardtitle.style.transition = "all ease 0.5s";
      cardtitle.setAttribute("data-title", "Open");
    }
  });
};

opencontacts();
closecontacts();
