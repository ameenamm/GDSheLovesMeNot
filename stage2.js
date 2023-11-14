console.log("I'm working teehee");

var fruit = "apples are wonderful";
console.log(fruit);


window.onload = function(){
    $(".outflower").draggable();
    $(".redloops").draggable();

$(".napkin1").click(openNapkin);
$(".napkin2").click(closeNapkin);



function openNapkin(){
$(".napkin2").css("display", "block");
$(".blackphone").css("display", "none");
$(".napkintext").css("display", "none");
$(".redloops").css("display", "none");

// ROTATION REFERENCE https://codepen.io/seeker5084/pen/VMQGwX

$('.wat').animate(
    { deg: 180 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
};



function closeNapkin(){
    $(".napkin2").css("display", "none");
}


$(".napkin1").click(openphone);
$(".textphone").click(closephone);

function openphone(){
$(".textphone").css("display", "block");

}

function closephone(){
    $(".textphone").css("display", "none");
}
}


