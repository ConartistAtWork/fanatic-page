
$("a").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// function resize() {
//   let nav = $('nav-group:first-child')
//   if ($(window).width() < 1048
//     && x.className !== "mobilemenu show") {
//     x.className = "mobilemenu"
//   }
//   else if (x.className === "mobilemenu show") {
//     return none
//   }
//   else {
//     x.className = "topmenu"
//     $(".dropdown-men").attr("class", "dropdown-men hidden")
//   }
// }

function saveWidth() {
  
}

let prevWidth = $(window).width()

console.log(prevWidth)

function resize() {
  /// bgResize Start
  let widthDiff = prevWidth - $(window).width();
  let offSet = -20;
  if (widthDiff == 40) {
    offSet -= 20;
    prevWidth = $(window).width()
  }
  $('.introduction').css({ 'background-position': "right " + offSet + "px " + "top " + "0" });
  /// bgResize Finish
  let nav = $('nav-group:first-child')
  if ($(window).width() < 1048
    && nav.className !== "mobilemenu show") {
    nav.className = "mobilemenu"
  }
  prevWidth = $(window).width()
}

function bgResize() {

  var thisWidth = $(document).width(),
    offSet = thisWidth -1930;

  if (offSet < -20) {
    $('.introduction').css({ 'background-position': "right " + offSet + "px " + "top " + "0" });
  }
  else
    $('.introduction').css({ 'background-position': "right " + -10 + "px " + "top " + "0" })
}


// $(window).resize(bgResize);
// $(document).ready(bgResize);