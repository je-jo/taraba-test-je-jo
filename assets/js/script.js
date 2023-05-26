const nav = document.querySelector('#mainnav')
const list = document.querySelector('#mainnav-list')

// Add menu burger button to the page
const burgerClone = document.querySelector('#template-burger').content.cloneNode(true);
const buttonBurger = burgerClone.querySelector('button');
nav.insertBefore(buttonBurger, list);
const burgerIcon = buttonBurger.querySelector("use");

// Toggle aria-expanded attribute
buttonBurger.addEventListener('click', () => {
    // aria-expanded="true" signals that the menu is currently open
    const isClosed = buttonBurger.getAttribute('aria-expanded') === "false" //return boolean
    buttonBurger.setAttribute('aria-expanded', isClosed);
    if (isClosed) {
        burgerIcon.setAttribute("href", "/assets/images/home/sidebar-close.svg#close")
    } else {
        burgerIcon.setAttribute("href", "/assets/images/home/menu-icon.svg#menu")
    }


});

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        buttonBurger.setAttribute('aria-expanded', false);
    }
});


// Add theme button to the page
const themeSwitchClone = document.querySelector('#template-theme').content.cloneNode(true);
const buttonTheme = themeSwitchClone.querySelector('label');
const checkboxTheme = buttonTheme.querySelector("input");
nav.appendChild(buttonTheme);

buttonTheme.addEventListener("click", changeTheme);



function changeTheme() {
    console.log(checkboxTheme.checked)
    if (checkboxTheme.checked) {
        document.documentElement.className = "dark"
    }
    else {
        document.documentElement.className = "light"
    }
    localStorage.setItem('theme', document.documentElement.className);
} 


