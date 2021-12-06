$(document).ready(function(){

    $(".navigation_button_auth").mouseover(function(){

        $(".navigation_animatedtext_animatedtextforlogin").fadeIn();  
        $(".navigation_animatedtext_animatedtextforlogin").css("visibility", "visible");

    });

    $(".navigation_button_auth").mouseout(function(){

        $(".navigation_animatedtext_animatedtextforlogin").fadeOut();

    });

  });

$(document).ready(function(){

    $(".navigation_button_reg").mouseover(function(){

        $(".navigation_animatedtext_animatedtextforreg").fadeIn();
        $(".navigation_animatedtext_animatedtextforreg").css("visibility", "visible");

    });

    $(".navigation_button_reg").mouseout(function(){

        $(".navigation_animatedtext_animatedtextforreg").fadeOut();
        
    });
    
  });