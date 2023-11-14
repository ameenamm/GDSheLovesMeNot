console.log("I'm working teehee");

var fruit = "apples are wonderful";
console.log(fruit);


window.onload = function(){
    $(".handw").draggable();
    $(".SAr").draggable();
    $(".cafeR").draggable();
    $(".flwrs").draggable();
    $(".outflower").draggable();
   


    $(".fig2").hover(aahpop, oohpop);

    function aahpop(){
        $(".fig2").attr("src", "Doodles-40.png");
        $(".fig2").css("width", "100px");
        
    }
    
    function oohpop(){
        $(".fig2").attr("src", "fig.png");
        $(".fig2").css("width", "100px");
    }

    $(".papaya2").hover(apop, opop);

    function apop(){
        $(".papaya2").attr("src", "Doodles-39.png");
        $(".papaya2").css("width", "150px");
        
    }
    
    function opop(){
        $(".papaya2").attr("src", "papaya.png");
        $(".papaya2").css("width", "150px");
    }




}



