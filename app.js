// Scroll To Top BTN
const rootEl = document.documentElement;
const topBtn = document.querySelector('.scrollToTopBtn');
// theme switch
const toggleSwitch = document.querySelector('.checkbox[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

/*============= 
DARK MODE START 
===============*/
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  // console.log('I work ! ✅')
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}
/*=========== 
DARK MODE END 
=============*/

/*==================
SCROLL TOP TOP START  
====================*/
function goToTop() {
  rootEl.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleScroll() {
  let scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  if (rootEl.scrollTop / scrollTotal > 0.8) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
}
/*================
SCROLL TOP TOP END  
==================*/


// EVENT LISTENERS
document.addEventListener('scroll', handleScroll);
toggleSwitch.addEventListener('change', switchTheme, false);
topBtn.addEventListener('click', goToTop);
