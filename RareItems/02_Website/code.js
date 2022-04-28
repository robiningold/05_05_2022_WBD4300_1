
// Function for the 360 view of the product
(function () {
  // Linking to the other Show with the selector
  $('#colorway').change(function () {
    console.log(this.value)
    if (this.value == 'fragment') {
      window.location.assign('jordan_1_retro_fragment.html')
   }
   console.log(this.value)
  })

  // Setting the Image Number to 36 (amount of images)
  let imgNumber = 36
  const img = document.querySelector('#slide_1')


  if($('body').is('.travis')){
    // Interval for changing the pictures every 60ms
    setInterval(() => {
      
      // Placing a 0 in front of the Image Number if the Number is below 10
      if(imgNumber < 10) {
        img.src = `/RareItems/02_Website/images/Sneaker/J1_Retro_Low_Travis_Scott/img0${imgNumber}.jpg`
      } else {
        img.src = `/RareItems/02_Website/images/Sneaker/J1_Retro_Low_Travis_Scott/img${imgNumber}.jpg`
      }

      // Counting down the Image Number and repeating it by beginning with #36 again
      // Setting the Imagine Number to 1 and adding +1 would turn the product in the opposite direction
      if(imgNumber > 1) {
        imgNumber -= 1
      } else {
        imgNumber = 36
      }

    }, 60);

  } else if($('body').is('.fragment')) {
    // Linking to the other Show with the selector
    $('#colorway').change(function () {
      console.log(this.value)
      if (this.value == 'travis') {
        window.location.assign('jordan_1_retro_travis.html')
     }
     console.log(this.value)
    })

    // Interval for changing the pictures every 60ms
    setInterval(() => {
      
      // Placing a 0 in front of the Image Number if the Number is below 10
      if(imgNumber < 10) {
        img.src = `/RareItems/02_Website/images/Sneaker/J1_Low_Fragment_x_Travis_Scott/img0${imgNumber}.jpg`
      } else {
        img.src = `/RareItems/02_Website/images/Sneaker/J1_Low_Fragment_x_Travis_Scott/img${imgNumber}.jpg`
      }

      // Counting down the Image Number and repeating it by beginning with #36 again
      // Setting the Imagine Number to 1 and adding +1 would turn the product in the opposite direction
      if(imgNumber > 1) {
        imgNumber -= 1
      } else {
        imgNumber = 36
      }

    }, 60);
  }

})();

// Removing the 'active' class from every other slide and adding it to slide 1
$("#thumbnail_1").click(function() {
  $('.slides').find('.slide').removeClass('active')
  $('#slide_1').addClass('active')
});

// Removing the 'active' class from every other slide and adding it to slide 2
$('#thumbnail_2').click(function() {
  $('.slides').find('.slide').removeClass('active')
  $('#slide_2').addClass('active')
});

// Removing the 'active' class from every other slide and adding it to slide 3
$('#thumbnail_3').click(function() {
  $('.slides').find('.slide').removeClass('active')
  $('#slide_3').addClass('active')
});

// Removing the 'active' class from every other slide and adding it to slide 4
$('#thumbnail_4').click(function() {
  $('.slides').find('.slide').removeClass('active')
  $('#slide_4').addClass('active')
});

// Add event handlers
$('.right').click(moveRight)
$('.left').click(moveLeft)

// Responsible for right movement
function moveRight () {

$('.slides').animate({
    'left': '-=95vw'
  }, 
  0, 
  function () {
    $('.slides').css('left', '')
    $('.slide').first().appendTo('.slides')
  })

}

// Responsible for left movement
function moveLeft () {

  $('.slides').animate({
    'left': '+=95vw'
  }, 
  0, 
  function () {
    $('.slides').css('left', '')
    $('.slide').last().prependTo('.slides')
  })

}


// Form validation
$('.content_register form').on('submit', function (e) {
  e.preventDefault()
  $('.error-message').remove()
  const input_values = {
    colorway : $('#colorway').val(),
    size : $('#size').val(),
    firstName : $('#first_name').val(),
    lastName : $('#last_name').val(),
    street : $('#street').val(),
    city : $('#city').val(),
    zip : $('#zip').val(),
    email : $('#email').val(),
    terms : $('#terms').val(),
    newsletter : $('#newsletter').val()
  }

  const error_messages = {}

  // Validation for colorway
  if (!($('#colorway').prop("checked"))) {
    error_messages.colorway = 'Please choose a colorway.'
    $('.colorway').css('color', '#bb0000')
    // change color of radio button itself
  }

  // Validation for size
  if ($('#size').val() == 0) {
    error_messages.size = 'Please select your size.'
    $('#size').css('border', 'solid #bb0000 2px')
    $('#size').css('color', '#bb0000')
  }

  // Validation for first name
  if (input_values.firstName.length <= 0) {
    error_messages.firstName = 'Please enter your first name.'
    $('#first_name').css('border', 'solid #bb0000 2px')
  }

  // Validation for last name
  if (input_values.lastName.length <= 0) {
    error_messages.lastName = 'Please enter your last name.'
    $('#last_name').css('border', 'solid #bb0000 2px')
  }

  // Validation for street
  if (input_values.street.length <= 0) {
    error_messages.street = 'Please enter the street you live.'
    $('#street').css('border', 'solid #bb0000 2px')
  }

  // Validation for city
  if (input_values.city.length <= 0) {
    error_messages.city = 'Please enter the city you live in.'
    $('#city').css('border', 'solid #bb0000 2px')
  }

  // Validation for zip
  if (input_values.zip.length <= 0) {
    error_messages.zip = 'Please enter the zip code of your city.'
    $('#zip').css('border', 'solid #bb0000 2px')
  }

  // Validation for email address
  const email_pattern = /(?:((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?));*)/g
  if (input_values.email.length <= 0) {
    error_messages.email = 'Please enter your email address'
    $('#email').css('border', 'solid #bb0000 2px')
  } else if (!email_pattern.test(input_values.email)) {
  // Is the input an actual email
    error_messages.email = 'Your email address does not seem to be real'
    $('#email').css('border', 'solid #bb0000 2px')
  }

  // Generate error messages
  if (!$.isEmptyObject(error_messages)){
    if ( error_messages.colorway ) {
      $('.colorway').after(`<span class="error-message" style="color: #bb0000;">${error_messages.colorway}</span>`)
    }
    if ( error_messages.size ) {
      $('#size').after(`<span class="error-message" style="color: #bb0000;">${error_messages.size}</span>`)
    }
    if ( error_messages.firstName ) {
      $('#first_name').after(`<span class="error-message" style="color: #bb0000;">${error_messages.firstName}</span>`)
    }
    if ( error_messages.lastName ) {
      $('#last_name').after(`<span class="error-message" style="color: #bb0000;">${error_messages.lastName}</span>`)
    }
    if ( error_messages.street ) {
      $('#street').after(`<span class="error-message" style="color: #bb0000;">${error_messages.street}</span>`)
    }
    if ( error_messages.city ) {
      $('#city').after(`<span class="error-message" style="color: #bb0000;">${error_messages.city}</span>`)
    }
    if ( error_messages.zip ) {
      $('#zip').after(`<span class="error-message" style="color: #bb0000;">${error_messages.zip}</span>`)
    }
    if ( error_messages.email ) {
      $('#email').after(`<span class="error-message" style="color: #bb0000;">${error_messages.email}</span>`)
    }
    
  } else {

    setTimeout(function () {
      $('.loading-container').html('Success, you are registered.')
    }, 1000)
  }
  
});