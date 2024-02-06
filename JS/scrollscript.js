// Need to be change is header
const header = document.querySelector("header");
const ft = document.querySelector(".fixed-top");
const sectionOne = document.querySelector(".home-intro");
const sectionOneOptions = {
    rootMargin:"-600px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(
  function(entries, sectionOneObserver) {
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            header.classList.add("nav-scrolled")   
            
            ft.classList.add("fixed-top")        
            ft.classList.add("black") 


        } else{
            header.classList.remove("nav-scrolled")
  
            ft.classList.remove("fixed-top")
            ft.classList.add("fixed-top")
            ft.classList.remove("black")  

         
        }
    });
  },
  // Pass sectionOneOptions as the second argument
  sectionOneOptions);
sectionOneObserver.observe(sectionOne);




