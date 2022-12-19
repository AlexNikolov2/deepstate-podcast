export function hamburger() {
  const x = document.getElementById('navbar');
  const header = document.getElementById('header');

  if (x.style.display === 'flex') {
    x.style.display = 'none';
    header.style.flexDirection = 'row';
  } else {
    x.style.display = 'flex';
    header.style.flexDirection = 'column';
    if (screen.width > 768) {
      header.style.flexDirection = 'row';
    }
  }
}
