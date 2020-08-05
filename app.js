const themeDots = document.getElementsByClassName('theme-dot');
let theme = localStorage.getItem('theme');


if (theme == null) {
    setTheme('light'); // set default theme 
} else {
    setTheme(theme); // theme of user's choice 
}

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
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

