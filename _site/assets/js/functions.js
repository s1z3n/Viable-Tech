$(document).ready(function() {


  $('.contact-nav').click(function(){
  	$('.modal-bg').addClass('is-open');
  	// return false
  });

   $('.close').click(function(){
  	$('.modal-bg').removeClass('is-open');
  });

   $('.modal-bg').click(function(event){
   	if (event.target == this){
   		$('.modal-bg').removeClass('is-open');
   	}

  	
  });

  $('#account-manager').click(function(){
    $('.job-modal-bg-1').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-1').removeClass('is-open');
  });

   $('.job-modal-bg-1').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-1').removeClass('is-open');
    }

    
  });



$('#software-engineer').click(function(){
    $('.job-modal-bg-2').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-2').removeClass('is-open');
  });

   $('.job-modal-bg-2').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-2').removeClass('is-open');
    }

    
  });





$('#administrative-assistant').click(function(){
    $('.job-modal-bg-3').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-3').removeClass('is-open');
  });

   $('.job-modal-bg-3').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-3').removeClass('is-open');
    }

    
  });








$('#QA-engineer').click(function(){
    $('.job-modal-bg-4').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-4').removeClass('is-open');
  });

   $('.job-modal-bg-4').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-4').removeClass('is-open');
    }

    
  });











$('#application-consultant').click(function(){
    $('.job-modal-bg-5').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-5').removeClass('is-open');
  });

   $('.job-modal-bg-5').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-5').removeClass('is-open');
    }

    
  });











$('#application-support-consultant').click(function(){
    $('.job-modal-bg-6').addClass('is-open');
    // return false
  });

   $('.job-close').click(function(){
    $('.job-modal-bg-6').removeClass('is-open');
  });

   $('.job-modal-bg-6').click(function(event){
    if (event.target == this){
      $('.job-modal-bg-6').removeClass('is-open');
    }

    
  });





});










