import {Button} from './button.js';
import {Keyboard} from './keyboard.js';

let keyboard = new Keyboard();

document.addEventListener('keydown', (event) => {
    let el = document.querySelector("[id='"+event.key+"']");
    if (el !== null) {
        el.style.backgroundColor = 'yellow';
    }
    console.log(event.key);
    let btn = keyboard.getButtonByID(+event.key);
    if (btn === null) {
        console.log('Go to hell');
    }
    btn.print();
});

document.addEventListener('keyup', (event) => {
    let el = document.querySelector("[id='"+event.key+"']");
    if (el !== null) {
        el.style.backgroundColor = 'green';
    }
});

window.addEventListener('load', (event) => {
    let buttons = keyboard.getButtons();
    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i];
        const btnUI = document.createElement('div');
        btnUI.classList.add('button');
        btnUI.id = btn.value;
        btnUI.innerHTML = btn.value;
        btnUI.addEventListener('click', (event) => {
            btn.print();
        })
        document.body.append(btnUI);
    }

});