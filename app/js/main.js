$(function(){


  $('.header__burger-btn').on('click', function(){
    $('.header__menu, .header__burger-btn').toggleClass('active__menu');
  });
  $('.sub__menu-treatment').on('click', function(){
    $('.sub__menu-list').toggleClass('active__drop-menu--treatment');
  });
 
  $('.sub__menu-clinics').on('click', function(){
    $('.sub__menu-list').toggleClass('active__drop-menu--clinics');
  });
 


});