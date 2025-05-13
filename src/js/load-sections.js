function loadHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}

loadHTML('header', 'partials/header.html');
loadHTML('modal', 'partials/modal.html');
loadHTML('hero', 'partials/hero.html');
loadHTML('hakkımızda', 'partials/hakkımızda.html');
loadHTML('/kutularımız', 'partials//kutularımız.html');
loadHTML('/neler', 'partials//neler.html');
loadHTML('neden', 'partials/neden.htmlgame-a.html');
loadHTML('galeri', 'partials/galeri.html');
loadHTML('müşteri', 'partials/müşteri.html');
loadHTML('sss', 'partials/sss.html');
loadHTML('bize', 'partials/bize.html');
loadHTML('footer', 'partials/footer.html');
