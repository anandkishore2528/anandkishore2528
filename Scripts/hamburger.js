const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navlinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    //toggle menu
    nav.classList.toggle("nav-active");

    //Burger Animation
    burger.classList.toggle("toggler");

    //Animate Links
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinksfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navslide();
