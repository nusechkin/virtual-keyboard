import {Button} from './button.js';
import {Keyboard} from './keyboard.js';


document.addEventListener('keydown', (event) => {
    let btn = new Button(event.key);
    //console.log(b);
    btn.print();
});

window.addEventListener('load', (event) => {
    let keyboard = new Keyboard();
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