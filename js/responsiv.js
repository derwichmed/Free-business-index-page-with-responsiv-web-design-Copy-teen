$(function (){
    isNavBarHidden = true;
    $('.menu_icon').click(function (){
       if(isNavBarHidden){
           $('.nav_bar').fadeIn('slow');
           isNavBarHidden = false;
       } 
        else{
            $('.nav_bar').fadeOut('slow');
            isNavBarHidden = true;
        }
    });
});