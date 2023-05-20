const nav = document.querySelector('#mainnav')
const list = document.querySelector('#mainnav-list')
const burgerClone = document.querySelector('#template-burger').content.cloneNode(true);
const buttonBurger = burgerClone.querySelector('button');

// Toggle aria-expanded attribute
buttonBurger.addEventListener('click', e => {
    // aria-expanded="true" signals that the menu is currently open
    const isOpen = buttonBurger.getAttribute('aria-expanded') === "true"
    buttonBurger.setAttribute('aria-expanded', !isOpen);
});

// Hide list on keydown Escape
nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
        buttonBurger.setAttribute('aria-expanded', false);
    }
});

// Add the button to the page
nav.insertBefore(burgerClone, list);

const themeSwitchClone = document.querySelector('#template-theme').content.cloneNode(true);
const buttonTheme = themeSwitchClone.querySelector('button');

nav.appendChild(buttonTheme);
