const image = document.querySelector("#tourbg");
const carolinaimg = document.querySelector("#carolina");
const between = (x, min, max) => {
  return x >= min && x <= max;
};

function setImage() {
  let day = new Date();
  let hr = day.getHours();
  if (between(hr, 5, 7)) {
    image.setAttribute("src", "Images/WORKS/touring-site-eve-bg.jpg");
    console.log(hr);
    console.log("early Morning");
  } else if (between(hr, 8, 16)) {
    image.setAttribute("src", "Images/WORKS/touring-site-day-bg.jpg");
    console.log(hr);
    console.log("day time");
  } else if (between(hr, 17, 18)) {
    image.setAttribute("src", "Images/WORKS/touring-site-eve-bg.jpg");
    console.log(hr);
    console.log("Eve");
  } else if (between(hr, 19, 23)) {
    image.setAttribute("src", "Images/WORKS/touring-site-night-bg_3.jpg");
    console.log(hr);
    console.log("night");
  } else if (between(hr, 0, 4)) {
    image.setAttribute("src", "Images/WORKS/touring-site-night-bg_3.jpg");
    console.log(hr);
    console.log("early night");
  }
}
window.onload = setImage();

carolinaimg.addEventListener("mouseover", () => {
  carolinaimg.style.content = "url('Images/WORKS/carolina_2.jpg')";
});

carolinaimg.addEventListener("mouseout", () => {
  carolinaimg.style.content = "url('Images/WORKS/carolina.jpg')";
});
