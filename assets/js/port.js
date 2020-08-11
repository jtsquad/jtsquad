/*******************************************sessao portfolio*******************************************/

/*******Filtro*******/


var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',

  });
  
  
  var filterFns = {
    numberGreaterThan50: function() {
    },
  };
  
  // conexao do botao 
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  //  checa a classe do botao
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
  /*******Galeria de imgs*******/
  
  $('.popup-gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
  });
  
  $(document).ready(function(){
    $('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      margin:10,
      responsive:{
        600:{
          items:1
        }
      }
    });
  });
  
  
  