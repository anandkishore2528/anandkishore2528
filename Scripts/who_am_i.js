const tester = document.querySelector("#test");
const designer = document.querySelector("#des");
const freelancer = document.querySelector("#free");

const iam_list_a = document.querySelectorAll(".iam_list a");

const testcont = document.querySelector(".software_testing");
const designcont = document.querySelector(".designer");
const freelancecont = document.querySelector(".freelancer");

tester.addEventListener("mouseover", () => {
  tester.style.backgroundColor = "var(--green-text)";
});

tester.addEventListener("mouseout", () => {
  tester.style.backgroundColor = "";
});

tester.addEventListener("click", () => {
  tester.className = "active";
  designer.className = "";
  freelancer.className = "";
  testcont.style.transition = "all 1s ease ";
  designcont.style.left = "-4000px";
  freelancecont.style.left = "-4000px";
  testcont.style.left = "0px";
});

designer.addEventListener("mouseover", () => {
  designer.style.backgroundColor = "var(--green-text)";
});

designer.addEventListener("mouseout", () => {
  designer.style.backgroundColor = "";
});

designer.addEventListener("click", () => {
  designer.className = "active";
  tester.className = "";
  freelancer.className = "";
  designcont.style.transition = "all 1s ease ";
  testcont.style.left = "-3000px";
  freelancecont.style.left = "-3000px";
  designcont.style.left = "0px";
});

freelancer.addEventListener("mouseover", () => {
  freelancer.style.backgroundColor = "var(--green-text)";
});

freelancer.addEventListener("mouseout", () => {
  freelancer.style.backgroundColor = "";
});

freelancer.addEventListener("click", () => {
  freelancer.className = "active";
  tester.className = "";
  designer.className = "";
  freelancecont.style.transition = "all 1s ease";
  designcont.style.left = "-3000px";
  testcont.style.left = "-3000px";
  freelancecont.style.left = "0px";
});

/*function get(element,container) { 
    if(container === designcont) {

        element.addEventListener("mouseover", () => {
           element.style.backgroundColor= "var(--green-text)"; 
                 
       });   
       
        element.addEventListener("mouseout", () => {
            element.style. backgroundColor= ""; 
              
       }); 

       element.addEventListener("active", () => {
        element.style.backgroundColor= "var(--green-text)";
      
}); 
       }


       else if(container === illcontainer) {

        container.addEventListener("mouseover", () => {

                 
       });   
       
           container.addEventListener("mouseout", () => {

              
       }); 
       }

}*/
