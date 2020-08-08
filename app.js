const themeDots = document.getElementsByClassName('theme-dot');
const theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light'); // set default theme
} else {
  setTheme(theme); // theme of user's choice
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    const { mode } = this.dataset;
    console.log('option-clicked:', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'styles.css';
  } else if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css';
  } else if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css';
  } else if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css';
  } else {
    document.getElementById('theme-style').href = 'dark-mode.css';
  }

  localStorage.setItem('theme', mode); // set values to be stored in local storage
}

// typing effect
let i = 0;
const txt = 'theme options will be saved for your next visit !';
const speed = 50; // speed in miliseconds

function animation() {
  if (i < txt.length) {
    document.getElementById('settings-note').innerHTML += txt.charAt(i);
    i++;
    setTimeout(animation, speed);
  }
}
animation();
