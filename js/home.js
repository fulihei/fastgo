$(function(){
    $("a.lazyload").lazyload();
});
$(".menu").hover(
function(){
 $(".all_menu").css("display", "block"); 
},
function(){
$(".all_menu").css("display", "none"); 
});
$(".all_menu").hover(
function(){
 $(this).css("display", "block"); 
},
function(){
 $(this).css("display", "none"); 
});
$('.menu').click(function(e) {        
    $(".all_menu").addClass("menu_block");
});
$('.close_menu').click(function(e) {        
    $(".all_menu").removeClass("menu_block");
});
