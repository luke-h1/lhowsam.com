/*
==============
THEME SWITCHER 
==============
*/


const checkbox = document.getElementById('checkbox1');
const theme = localStorage.getItem('theme');
checkbox.addEventListener('change', darkModeSwitcher);


if (theme === null) {
  setTheme('light');
} else {
  setTheme(theme);
}

function darkModeSwitcher(event) {
  if (event.target.checked) {
    console.log(`${event.target.value} checked`)
    setTheme('dark');
  } else if (!event.target.checked) {
    console.log(`${event.target.value} not checked`)
    setTheme('light');
  }
}

function setTheme(mode) {
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'styles.css'; 
  } else if (mode === 'dark') {
    document.getElementById('theme-style').href = 'dark-mode.css';
  }
  localStorage.setItem('theme', mode);
}

/*
==============
SCROLL TO TOP 
==============
*/

const rootEl = document.documentElement;
const topBtn = document.querySelector('.scrollToTopBtn');

function goToTop(){
rootEl.scrollTo({top: 0, behavior: 'smooth'}); 
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
document.addEventListener('scroll', handleScroll);



// old theme switcher (unused)
// const themeDots = document.getElementsByClassName('theme-dot');
// const theme = localStorage.getItem('theme');

// if (theme == null) {
//     setTheme('light');
// } else {
//     setTheme(theme);
// }

// for (let i = 0; themeDots.length > i; i++) {
//     themeDots[i].addEventListener('click', function () {
//         const { mode } = this.dataset;
//         console.log('option-clicked:', mode);
//         setTheme(mode);
//     });
// }

// function setTheme(mode) {
//     if (mode == 'light') {
//         document.getElementById('theme-style').href = 'styles.css';
//     } else {
//         document.getElementById('theme-style').href = 'dark-mode.css';
//     }
//     localStorage.setItem('theme', mode); // set values to be stored in local storage
// }
