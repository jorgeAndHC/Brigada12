document.addEventListener('DOMContentLoaded', function() {
    let timerInterval
Swal.fire({
    title: 'Aprende más de nosotros ☻',
    html: 'Habilita el sonido para aprender más',
    width: 600,
    padding: '3em',
    background: '#f59622',
    timer: 6000,
     timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
});

var video = document.getElementById('myVideo');
var firstPlay = true;

    video.addEventListener('ended', function() {
        video.currentTime = 0;
        if (firstPlay) {
            video.muted = false;
            firstPlay = false;
        }
        video.play();
    });