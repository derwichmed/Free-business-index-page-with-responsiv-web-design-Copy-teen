$(function (){
   $('.login').click(function (){
        $('.form_get_subscription').hide();
        $('.form_get_login').show();
   });
   
   $('.subscribe').click(function (){
        $('.form_get_login').hide();
        $('.form_get_subscription').show();
   });
});