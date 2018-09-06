$(document).ready(function(){
  
      $('.item__btn').click(function(){
      $('.item').addClass('showing');
      $('.item').removeClass('zoom');
      $(this).parents('.item').removeClass('showing');
      $(this).parents('.item').addClass('zoom');
    });
    
    $('.diss-miss').click(function(){
      $('.item').removeClass('zoom');
      $('.item').removeClass('showing');
    });
    
    $('#footer').css("display","none")
    

      });

  $('.get').hover(function(){
    $(this).find('img').stop().fadeOut("slow");
    }, function() {
        $(this).find('img').stop().fadeIn("slow");
  });

  $('.descriptionwrap').hover(function(){
    $(this).find('img').stop().fadeIn("slow");
    }, function() {
        $(this).find('img').stop().fadeIn("slow");
  });


function add_to_cart(productNaam,productId,productPrijs){   

  $('#alertBanner').show();
  var total = Number($('#sach').html()); 
  total += Number(productPrijs);
	$.get("/cartadd?product_id="+ productId, function(string) {
    $('#sach').html(total); 
    window.location.href = "/";
	})	
;} 


