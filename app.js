const check = document.querySelector('.checkbox'); 
check.addEventListener('change', () => { 
    console.log('this function does fuck all !')
})



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