
const keyArrNoCaps = [
    { 'key': "`", 'keyCaps': "`", 'printable': true },
    { 'key': "1", 'keyCaps': "1", 'printable': true },
    { 'key': "2", 'keyCaps': "2", 'printable': true },
    { 'key': "3", 'keyCaps': "3", 'printable': true },
    { 'key': "4", 'keyCaps': "4", 'printable': true },
    { 'key': "5", 'keyCaps': "5", 'printable': true },
    { 'key': "6", 'keyCaps': "6", 'printable': true },
    { 'key': "7", 'keyCaps': "7", 'printable': true },
    { 'key': "8", 'keyCaps': "8", 'printable': true },
    { 'key': "9", 'keyCaps': "9", 'printable': true },
    { 'key': "0", 'keyCaps': "0", 'printable': true },
    { 'key': "-", 'keyCaps': "-", 'printable': true },
    { 'key': "=", 'keyCaps': "=", 'printable': true },
    { 'key': "Backspace", 'keyCaps': "Backspace", 'printable': false },
    { 'key': "Tab", 'keyCaps': "Tab", 'printable': false },
    { 'key': "q", 'keyCaps': "Q", 'printable': true },
    { 'key': "w", 'keyCaps': "W", 'printable': true },
    { 'key': "e", 'keyCaps': "E", 'printable': true },
    { 'key': "r", 'keyCaps': "R", 'printable': true },
    { 'key': "t", 'keyCaps': "T", 'printable': true },
    { 'key': "y", 'keyCaps': "Y", 'printable': true },
    { 'key': "u", 'keyCaps': "U", 'printable': true },
    { 'key': "i", 'keyCaps': "I", 'printable': true },
    { 'key': "o", 'keyCaps': "O", 'printable': true },
    { 'key': "p", 'keyCaps': "P", 'printable': true },
    { 'key': "[", 'keyCaps': "[", 'printable': true },
    { 'key': "]", 'keyCaps': "]", 'printable': true },
    { 'key': "\\", 'keyCaps': "\\", 'printable': true },
    { 'key': "CapsLock", 'keyCaps': "CapsLock", 'printable': false },
    { 'key': "a", 'keyCaps': "A", 'printable': true },
    { 'key': "s", 'keyCaps': "S", 'printable': true },
    { 'key': "d", 'keyCaps': "D", 'printable': true },
    { 'key': "f", 'keyCaps': "F", 'printable': true },
    { 'key': "g", 'keyCaps': "G", 'printable': true },
    { 'key': "h", 'keyCaps': "H", 'printable': true },
    { 'key': "j", 'keyCaps': "J", 'printable': true },
    { 'key': "k", 'keyCaps': "K", 'printable': true },
    { 'key': "l", 'keyCaps': "L", 'printable': true },
    { 'key': ";", 'keyCaps': ";", 'printable': true },
    { 'key': "'", 'keyCaps': "'", 'printable': true },
    { 'key': "Enter", 'keyCaps': "Enter", 'printable': false },
    { 'key': "Shift", 'keyCaps': "Shift", 'printable': false },
    { 'key': "z", 'keyCaps': "Z", 'printable': true },
    { 'key': "x", 'keyCaps': "X", 'printable': true },
    { 'key': "c", 'keyCaps': "C", 'printable': true },
    { 'key': "v", 'keyCaps': "V", 'printable': true },
    { 'key': "b", 'keyCaps': "B", 'printable': true },
    { 'key': "n", 'keyCaps': "N", 'printable': true },
    { 'key': "m", 'keyCaps': "M", 'printable': true },
    { 'key': ",", 'keyCaps': ",", 'printable': true },
    { 'key': ".", 'keyCaps': ".", 'printable': true },
    { 'key': "/", 'keyCaps': "/", 'printable': true },
    { 'key': "Shift", 'keyCaps': "Shift", 'printable': false },
    { 'key': "Control", 'keyCaps': "Control", 'printable': false },
    { 'key': "Meta", 'keyCaps': "Meta", 'printable': false },
    { 'key': "Alt", 'keyCaps': "Alt", 'printable': false },
    { 'key': " ", 'keyCaps': " ", 'printable': true },
    { 'key': "Alt", 'keyCaps': "Alt", 'printable': false },
    { 'key': "Control", 'keyCaps': "Control", 'printable': false },
    { 'key': "ArrowLeft", 'keyCaps': "ArrowLeft", 'printable': false },
    { 'key': "ArrowUp", 'keyCaps': "ArrowUp", 'printable': false },
    { 'key': "ArrowDown", 'keyCaps': "ArrowDown", 'printable': false },
    { 'key': "ArrowRight", 'keyCaps': "ArrowRight", 'printable': false }
];
import { Button } from './button.js';

export class Keyboard {
    constructor() {
        this.btnArray = [];
        this.btnArrayCaps = [];
        this.caps = false;
        this.createButtons();
    }
    createButtons() {
        for (let i = 0; i < keyArrNoCaps.length; i++) {
            this.btnArray.push(new Button(keyArrNoCaps[i].key, keyArrNoCaps[i].printable));
            this.btnArrayCaps.push(new Button(keyArrNoCaps[i].keyCaps, keyArrNoCaps[i].printable));
        }
    }
    getButtons() {
        if (this.isCaps() === true) {
            return this.btnArrayCaps;
        } else {
            return this.btnArray;
        }
    }
    getButtonByID(id) {
        let res = this.btnArray.filter(key => key.value === id);
        let resCaps = this.btnArrayCaps.filter(key => key.value === id);
        if (this.isCaps() === true) {
            return resCaps[0];
        } else {
            return res[0];
        }
    }

    toggleCaps() {
        this.caps = !this.caps;
    }

    isCaps() {
        return this.caps;
    }
}