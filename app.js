// Scroll To Top BTN
const rootEl = document.documentElement;
const topBtn = document.querySelector('.scrollToTopBtn');

// theme switch

const toggleSwitch = document.querySelector('.checkbox[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// THEME SWITCHER
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  console.log('I work ! ✅')
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

// SCROLL TO TOP
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

// function darkModeSwitcher(event) {
//   if (event.target.checked) {
//     setTheme('dark');
//   } else if (!event.target.checked) {
//     setTheme('light');
//   }
// }

// function setTheme(mode) {
//   if (mode === 'light') {
//     document.getElementById('theme-style').href = 'styles.css';
//   } else if (mode === 'dark') {
//     document.getElementById('theme-style').href = 'dark-mode.css';
//   }
//   localStorage.setItem('theme', mode);
// }

// EVENT LISTENERS
document.addEventListener('scroll', handleScroll);
toggleSwitch.addEventListener('change', switchTheme, false);
