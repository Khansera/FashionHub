//Showing spinner before DOM content is Loaded..//
$(document).ready(function() {
  // Hide the loader
  $("#loader").hide();
  $(".loader-container").hide();
  
  // Display the main content
  $("#content").show();
});
//NavBar Functionality//
function DropDown(target, dropdown){
   target.on("mouseover", function(){
    dropdown.show();
   })
   target.on("mouseout", function(){
    dropdown.hide();
   })
   dropdown.on("mouseover", function(){
    dropdown.show();
   })
   dropdown.on("mouseout", function(){
    dropdown.hide();
   })
}
DropDown($(".Gallery"),$(".GalleryDropdown"));

//Hamburger Functionality//
$(".Hamburger").on('click',()=>{
  $("#navLinksContainer").slideToggle();
})






// Testominial Functionality//
// let SlideSecOne=document.querySelectorAll(".ForSelect1");
// let SlideSecTwo=document.querySelectorAll(".ForSelect2");
// let SlideSecThree=document.querySelectorAll(".ForSelect3");
// let TestominialSpinner=document.querySelectorAll(".TestimonialSpinner");

// let currentSlide = 0;   

// async function slide() {
//   if (currentSlide === SlideSecOne.length) {
//     currentSlide = 0;
//   } 

//     SlideSecOne[currentSlide].classList.remove("CustomMq");
//     SlideSecTwo[currentSlide].classList.remove("CustomMq");
//     SlideSecThree[currentSlide].classList.remove("CustomMq");

//     currentSlide++;

//     await setTimeout(() => {
      
//       SlideSecOne[currentSlide - 1].classList.add("CustomMq");
//       SlideSecTwo[currentSlide - 1].classList.add("CustomMq");
//       SlideSecThree[currentSlide - 1].classList.add("CustomMq");
  
//     }, 5950);
// }

// setInterval(slide, 6000);
