



// Scroll To Top BTN
const rootEl = document.documentElement;
const topBtn = document.querySelector('.scrollToTopBtn');

function goToTop() {
  rootEl.scrollTo({ top: 0, behavior: 'smooth' });
}
topBtn.addEventListener('click', goToTop);

function handleScroll() {
  let scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.8) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
}

// EVENT LISTENERS
document.addEventListener('scroll', handleScroll); 
checkbox.addEventListener('change', darkModeSwitcher)