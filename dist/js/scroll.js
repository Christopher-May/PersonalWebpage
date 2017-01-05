$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
	int Milliseconds = 1000;
    // add smooth page scroll
    // milliseconds is the time it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, Milliseconds, function(){

      // Add # to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } 
  });
})