const checkbox = document.getElementById('checkbox1');
checkbox.addEventListener('change', darkModeSwitcher);

function darkModeSwitcher() { // TODO: SAVE IN LOCAL STORAGE THE THEME THAT IS PICKED 
    if (checkbox.checked) {
        console.log('checkbox has been checked');
        document.getElementById('theme-style').href = 'dark-mode.css'; 
    } else {
        console.log('not checked...');
        document.getElementById('theme-style').href = 'styles.css';
    }
}




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
