//Movement Animation

const pscontainer = document.querySelector(".ps");
const psimg = document.querySelector("#ps");
var pstitle = document.getElementsByClassName("pstitle")

const illcontainer = document.querySelector(".ill");
const illimg = document.querySelector("#ill");
var illtitle = document.getElementsByClassName("illtitle");

const graphcontainer = document.querySelector(".graph");
const graphimg = document.querySelector("#graph");
var graphtitle = document.getElementsByClassName("graphtitle");

const retouchcontainer = document.querySelector(".retouch");
const retouchimg = document.querySelector("#retouch");
var retouchtitle = document.getElementsByClassName("retouchtitle");

const testcontainer = document.querySelector(".test");
const testimg = document.querySelector("#testimg");
var testtitle = document.getElementsByClassName("testtitle");

const carolinacontainer = document.querySelector(".carolina_work");
const carolinabanner = document.querySelector("#banner");
var carolinatitle = document.getElementsByClassName("bannertitle");


//Moving Animation Event
function hover(container,element,title = []) { 

    if(container === pscontainer) {

        title[0] = pstitle[0];
        title[1] = pstitle[0];

        container.addEventListener("mouseover", () => {
            
            container.style.transition = "none";
            container.style.background = "var(--bg-color)";

            element.src = "Images/LOGOS/ps_2.png";

            title[0].style.color = "var(--ps-bg-color)";
            title[1].style.color = "var(--ps-bg-color)";

            container.style.boxShadow = "5px 5px 10px 5px rgba(0,0,0,0.1)";

            element.style.transform = "translateZ(30px)";
            
            title[0].style.transform = "translateZ(30px)";
            title[1].style.transform = "translateZ(30px)";
                 
       });   
       
           container.addEventListener("mouseout", () => {

            title[0].style.transform = "translateZ(0px)";
            title[1].style.transform = "translateZ(0px)";

            element.style.transform = "translateZ(0px)";
            
            container.style.boxShadow = "none";

            container.style.background = "var(--ps-bg-color)";

            title[0].style.color = "var(--ps-text-color)";

            title[1].style.color = "var(--ps-text-color)";

            element.src = "Images/LOGOS/ps_1.png";

            container.style.transition = "all 0.5s ease";
              
       }); 
       }


       else if(container === illcontainer) {
       
        title[0] = illtitle[0];
        title[1] = illtitle[1];

        container.addEventListener("mouseover", () => {
            
            container.style.transition = "none";
            container.style.background = "var(--bg-color)";

            element.src = "Images/LOGOS/ill_2.png";

            title[0].style.color = "var(--ill-bg-color)";
            title[1].style.color = "var(--ill-bg-color)";

            container.style.boxShadow = "5px 5px 10px 5px rgba(0,0,0,0.1)";

            element.style.transform = "translateZ(30px)";
            
            title[0].style.transform = "translateZ(30px)";
            title[1].style.transform = "translateZ(30px)";

            container.style.alignItems = "center";
                 
       });   
       
           container.addEventListener("mouseout", () => {

            title[0].style.transform = "translateZ(0px)";
            title[1].style.transform = "translateZ(0px)";

            element.style.transform = "translateZ(0px)";
            
            container.style.boxShadow = "none";

            container.style.background = "var(--ill-bg-color)";

            title[0].style.color = "var(--ill-text-color)";
            title[1].style.color = "var(--ill-text-color)";

            element.src = "Images/LOGOS/ill_1.png";

            container.style.transition = "all 0.5s ease";
              
       }); 
       }

       else if(container === graphcontainer) {
        container.addEventListener("mouseover", () => {
            container.style.transition = "none";
            element.style.transform = "translateZ(30px)";
            title[0].style.transform =  "translateZ(20px)";
       });   
       
           container.addEventListener("mouseout", () => {
            container.style.transition = "all 0.5s ease";
            element.style.transform = "translateZ(0px)";
            title[0].style.transform =  "translateZ(0px)";
            
       }); 
       }

       else if(container === retouchcontainer) {
        container.addEventListener("mouseover", () => {
            container.style.transition = "none";
            element.style.transform = "translateZ(30px)";
            title[0].style.transform =  "translateZ(20px)";
       });   
       
           container.addEventListener("mouseout", () => {
            container.style.transition = "all 0.5s ease";
            element.style.transform = "translateZ(0px)";
            title[0].style.transform =  "translateZ(0px)";
            
       }); 
       }

       else if(container === testcontainer) {
        container.addEventListener("mouseover", () => {
            container.style.transition = "none";
            element.style.transform = "translateZ(30px)";
            title[0].style.transform =  "translateZ(20px)";
       });   
       
           container.addEventListener("mouseout", () => {
            container.style.transition = "all 0.5s ease";
            element.style.transform = "translateZ(0px)";
            title[0].style.transform =  "translateZ(0px)";
            
       }); 
       }

       else if(container === carolinacontainer) {
        container.addEventListener("mouseover", () => {
            container.style.transition = "none";
            element.src = "Images/WORKS/carolina_2.jpg";
            element.style.transform = "translateZ(50px)";
            container.style.boxShadow = "10px 10px 25px 5px rgba(0,0,0,0.2)";     
       });   
       
           container.addEventListener("mouseout", () => {
            container.style.transform = "translateZ(0px)";
            element.src = "Images/WORKS/carolina.jpg";
            container.style.transition = "all 0.5s ease";
            container.style.boxShadow = "none";
       }); 
       }

       else if(container === retouch1container) {
        container.addEventListener("mouseover", () => {
            container.style.transition = "none";
            element.style.transform = "translateZ(50px)";
            container.style.boxShadow = "10px 10px 25px 5px rgba(0,0,0,0.2)";     
       });   
       
           container.addEventListener("mouseout", () => {
            container.style.transform = "translateZ(0px)";
            container.style.transition = "all 0.5s ease";
            container.style.boxShadow = "none";
       }); 
       }

    }  
   

    hover(pscontainer, psimg, pstitle);
    hover(illcontainer, illimg, illtitle);
    hover(graphcontainer, graphimg, graphtitle);
    hover(retouchcontainer, retouchimg, retouchtitle);
    hover(testcontainer, testimg, testtitle);