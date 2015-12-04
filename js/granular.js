$(".scroll-to").on("click", function(){

  var sectionName = $(this).attr("href");
  console.log(sectionName);

  var sectionPlacement = $(sectionName).offset().top;
  console.log(sectionPlacement);

  $("html, body").animate({ scrollTop: sectionPlacement }, 1000);

  return false;

});

var photoCount = 0;

$(".slide-forwards").on("click", function(){

  if (photoCount == 0){
    $('header').addClass("image-one");
    photoCount = 1;

  } else if( photoCount === 1){

    $('header').addClass("image-two");
    photoCount = 2;

  } else if( photoCount === 2){
    $('header').removeClass("image-two image-one");
    photoCount = 0;
  }

});

$(".slide-backwards").on("click", function(){

  if (photoCount == 0){
    $('header').addClass("image-two");
    photoCount = 2;


  } else if( photoCount == 1){
    $('header').removeClass("image-two image-one");
    photoCount = 0;


  } else if( photoCount == 2){
    $('header').addClass("image-one");
    photoCount = 1;
  }

});
