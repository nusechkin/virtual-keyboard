//const keyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const keyArr = [49, 50, 51, 52, 53, 54, 55, 56, 57];
// const keyArr = [
//     "`",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "0",
//     "-",
//     "=",
//     "Backspace",
//     "Tab",
//     "q",
//     "w",
//     "e",
//     "r",
//     "t",
//     "y",
//     "u",
//     "i",
//     "o",
//     "p",
//     "[",
//     "]",
//     "\\",
//     "CapsLock",
//     "a",
//     "s",
//     "d",
//     "f",
//     "g",
//     "h",
//     "j",
//     "k",
//     "l",
//     ";",
//     "'",
//     "Enter",
//     "Shift",
//     "z",
//     "x",
//     "c",
//     "v",
//     "b",
//     "n",
//     "m",
//     ",",
//     ".",
//     "/",
//     "Shift",
//     "Control",
//     "Meta",
//     "Alt",
//     " ",
//     "Alt",
//     "Control",
//     "ArrowLeft",
//     "ArrowUp",
//     "ArrowDown",
//     "ArrowRight"
// ];

const keyArr = [
    {'key':"`", 'printable':true},
    {'key':"1", 'printable':true},
    {'key':"2", 'printable':true},
    {'key':"3", 'printable':true},
    {'key':"4", 'printable':true},
    {'key':"5", 'printable':true},
    {'key':"6", 'printable':true},
    {'key':"7", 'printable':true},
    {'key':"8", 'printable':true},
    {'key':"9", 'printable':true},
    {'key':"0", 'printable':true},
    {'key':"-", 'printable':true},
    {'key':"=", 'printable':true},
    {'key':"Backspace", 'printable':false},
    {'key':"Tab", 'printable':false},
    {'key':"q", 'printable':true},
    {'key':"w", 'printable':true},
    {'key':"e", 'printable':true},
    {'key':"r", 'printable':true},
    {'key':"t", 'printable':true},
    {'key':"y", 'printable':true},
    {'key':"u", 'printable':true},
    {'key':"i", 'printable':true},
    {'key':"o", 'printable':true},
    {'key':"p", 'printable':true},
    {'key':"[", 'printable':true},
    {'key':"]", 'printable':true},
    {'key':"\\", 'printable':true},
    {'key':"CapsLock", 'printable':false},
    {'key':"a", 'printable':true},
    {'key':"s", 'printable':true},
    {'key':"d", 'printable':true},
    {'key':"f", 'printable':true},
    {'key':"g", 'printable':true},
    {'key':"h", 'printable':true},
    {'key':"j", 'printable':true},
    {'key':"k", 'printable':true},
    {'key':"l", 'printable':true},
    {'key':";", 'printable':true},
    {'key':"'", 'printable':true},
    {'key':"Enter", 'printable':false},
    {'key':"Shift", 'printable':false},
    {'key':"z", 'printable':true},
    {'key':"x", 'printable':true},
    {'key':"c", 'printable':true},
    {'key':"v", 'printable':true},
    {'key':"b", 'printable':true},
    {'key':"n", 'printable':true},
    {'key':"m", 'printable':true},
    {'key':",", 'printable':true},
    {'key':".", 'printable':true},
    {'key':"/", 'printable':true},
    {'key':"Shift", 'printable':false},
    {'key':"Control", 'printable':false},
    {'key':"Meta",'printable':false},
    {'key':"Alt",'printable':false},
    {'key':" ",'printable':true},
    {'key':"Alt",'printable':false},
    {'key':"Control",'printable':false},
    {'key':"ArrowLeft",'printable':false},
    {'key':"ArrowUp",'printable':false},
    {'key':"ArrowDown",'printable':false},
    {'key':"ArrowRight",'printable':false}
];
import {Button} from './button.js';

export class Keyboard {
    //lang = 'en';
    constructor() {
        this.btnArray = [];
        this.createButtons();
    }
    createButtons() {
        console.log('keyArr = ' + keyArr);
        for (let i=0; i<keyArr.length; i++){
            this.btnArray.push(new Button(keyArr[i].key, keyArr[i].printable));
            // console.log('btn = ' + this.btnArray[i].key);
        }
    }
    getButtons() {
        return this.btnArray;
    }
    getButtonByID(id) {
        console.log('id = ' + id);
        let res = this.btnArray.filter(key => key.value === id);
        return res[0];
    }
}