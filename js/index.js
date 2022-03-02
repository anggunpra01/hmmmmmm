(function() {

  var screenresolution = window.screen.availWidth;
  var allf = document.getElementById("allf")

if( screenresolution<700){
  Swal.fire({
    icon: 'error',
    title: 'GAK BOLEH BUKA DI HP',
    text: 'Buka Lewat Laptop yah nggun',
    footer: 'by.me',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  allf.classList.add('alloff');
  
  
  // document.getElementById("MyElement").classList.remove('MyClass');
 } else{
  Swal.fire({
    icon: 'success',
    title: 'LUASKAN LAYAR',
    text: 'Tekan F11 atau Fn+F11',
    footer: 'by.me',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })

 

  function $(id) {
    return document.getElementById(id);
  }
  console.log(screenresolution)
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
}
}());
