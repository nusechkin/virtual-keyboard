import {Button} from './button.js';
import {Keyboard} from './keyboard.js';

let keyboard = new Keyboard();

document.addEventListener('keydown', (event) => {
    let el = document.querySelector("[id='"+event.key+"']");
    if (el !== null) {
        el.classList.add("active");
    }
    console.log(event.key);
    let btn = keyboard.getButtonByID(event.key);
    if (btn === null) {
        console.log('Go to hell');
    }
    btn.printToArea('output');
});

document.addEventListener('keyup', (event) => {
    let el = document.querySelector("[id='"+event.key+"']");
    if (el !== null) {
        el.classList.remove("active");
    }
});

window.addEventListener('load', (event) => {

    const textArea = document.createElement('textarea');
    textArea.classList.add("textarea");
    textArea.id = 'output';
    document.body.append(textArea);

    drawKeyboard();
});

function drawKeyboard(){
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.append(container);
    let buttons = keyboard.getButtons();
    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i];
        const btnUI = document.createElement('div');
        btnUI.classList.add('button');
        btnUI.id = btn.value;
        btnUI.innerHTML = btn.value;
        btnUI.addEventListener('click', (event) => {
            btn.printToArea('output');
        })
        container.append(btnUI);
    }

}