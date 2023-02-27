const search = document.querySelector('.search')
const btn = document. querySelector('.btn')
const input = document.querySelector('.input')
btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 10
  });
}
google.maps.event.addDomListener(window, 'load', initMap);

