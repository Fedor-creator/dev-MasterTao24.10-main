$(document).ready(function(){
  const burger = document.querySelector('.btn-burger');
  const navigation = document.querySelector('.header__navigation');

  const toggleMenu =()=> {
      burger.classList.toggle('open');
      navigation.classList.toggle('show');
  }

  burger.addEventListener('click', toggleMenu);


  $('#banner').slick({
      // setting-name: setting-value
      arrows: true,
      dots: true,
      fade: true,
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

  /*form calculation*/
  const checkboxes = document.querySelectorAll('[type="checkbox"]')
  if(checkboxes.length > 0) {
    checkboxes.forEach(checkbox => {
      checkbox.closest('.input-column').classList.add('column-checkbox')
    })
  }

  const file = document.querySelectorAll('.input-file')
  if(file.length > 0) {
    function addPadding() {
      if ($(window).width() > 1024) {
        file.forEach(item => {
          item.closest('.input-column').style.paddingTop = '6px'
        })
      } else  {
        file.forEach(item => {
          item.closest('.input-column').style.paddingTop = '0'
        })
      }
    } addPadding() 
    $(window).on("resize", addPadding)
  }


  /*slider advantages(mobile only)*/
  mobileOnlySlider("#slider-advantages", true, false, 1024);
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

  /*slider-template*/
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

  function addClassCharter() {
      const section = document.querySelectorAll('section')
      section.forEach(item => item.classList.add('charter'))
  }

  document.querySelector('.home-page') ? addClassCharter() : null;

  const arrayBurgers = document.querySelectorAll('.hamburger')
  
  if (arrayBurgers.length > 0) {
      arrayBurgers.forEach(item => {
        item.addEventListener('click', function(){
          item.classList.toggle('is-active');
      })
    })
  }

});



