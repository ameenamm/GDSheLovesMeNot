console.log("I'm working teehee");

var fruit = "apples are wonderful";
console.log(fruit);



window.onload = function(){
    $(".fork").draggable();
    $(".spotify").draggable();

    $(".ooh").hover(aahpop, oohpop);


    


    function aahpop(){
        $(".ooh").attr("src", "Doodles-16.png");
        $(".ooh").css("width", "200px");
        
    }
    
    function oohpop(){
        $(".ooh").attr("src", "Doodles-15.png");
        $(".ooh").css("width", "100px");
    }
    

    
}