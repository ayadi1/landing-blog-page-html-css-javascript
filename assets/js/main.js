$(function () {
  $("#menu-btn").click(() => {
    $(".bottom").slideToggle("slow");
  });
  $(".menu-list-title").click(function () {
    console.log($(this).next().slideToggle("slow"));
  });
});
