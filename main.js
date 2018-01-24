$(function() {
  // Going to Page-2
  $("#for-page-2").on("click", function(){
    $("#page-1").fadeOut(1000).css("display", "none");
    $("#page-2").fadeIn(1000).css("display", "block");
    $("#active-contact-icon").fadeIn(1000).attr("src", "../Crazy/images/boy.svg");
  });
  // Going to Page-3
  $("#for-page-3").on("click", function() {
    $("#page-2").fadeOut(1000).css("display", "none");
    $("#page-3").fadeIn(1000).css("display", "block");
    $("#active-contact-icon").fadeIn(1000).attr("src","../Crazy/images/santa.svg");
  });
  // Going to Page-1
  $("#for-page-1").on("click", function(){
    $("#page-3").fadeOut(1000).css("display", "none");
    $("#page-1").fadeIn(1000).css("display", "block");
    $("#active-contact-icon").fadeIn(1000).attr("src","../Crazy/images/man.svg");
  });
});
