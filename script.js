// Custom JavaScript function
function showGreeting(name) {
    const message = `Welcome, ${name}! Thanks for visiting my site.`;
    console.log(message);
  }
  showGreeting("Visitor");
  
  // jQuery Effects
  $(document).ready(function () {
    $("#toggle-facts").on("click", function () {
      $("#extra-facts").slideToggle("slow");
    });
  
    // Example jQuery effect on hover
    $("section").hover(
      function () {
        $(this).css("background-color", "#f0f8ff");
      },
      function () {
        $(this).css("background-color", "");
      }
    );
  });