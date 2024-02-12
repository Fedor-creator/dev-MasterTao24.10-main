$(document).ready(function(){

  // Add class .charter
  function addClassCharter() {
    const section = document.querySelectorAll('section')
    section.forEach(item => item.classList.add('charter'))
  }
  
  document.querySelector('.home-page') ? addClassCharter() : null;
  
    // Banner-Slider
    // setting-name: setting-value - Подключение функций 
      $('#banner').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.banner-arrows'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
            }
          },
        ]
      });
  
    // Advantages-Slider
    mobileOnlySlider("#advantages-slider", true, false, 1024);
  
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    }

      //Slider-Template//
  $('.slider-template').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });
    
    // Burger-menu
    const burgers = document.querySelectorAll('.hamburger')
    const nav = document.querySelector('.header__nav')
  
    if (burgers.length > 0) {
      burgers.forEach(element => {
        element.addEventListener('click', function(){
          element.classList.toggle('is-active');
          nav.classList.toggle('show');
        })
      })
    }
  
    // File-Input
    const fileInput = document.querySelector('#fileInput');
    const fileName  = document.querySelector('#file-name')
  
    fileInput.addEventListener('change', function() {
      fileName.innerHTML = this.files[0].name
    });
  
    // Move-chekbox "Calculation"
    const chekboxes = document.querySelectorAll('[type="checkbox"]');
    if(chekboxes.length > 0) {
      chekboxes.forEach(chekbox => {
        chekbox.closest('.calculation-column').classList.add('move-checkbox');
      })
    }
  
    // Move-code "Calculation"
    const codes = document.querySelectorAll('#code');
    if(codes.length > 0) {
      codes.forEach(code => {
        code.closest('.calculation-column').classList.add('move-code');
      })
    }
  
    // Move-input-name "Calculation"
    const file = document.querySelectorAll('.input-file')
    if(file.length > 0) {
      file.forEach(item => {
        item.closest('.calculation-column').style.paddingTop = '6px'
      })
    }
  });