const keyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
import {Button} from './button.js';

export class Keyboard {
    lang = 'en';
    btnArray = [];
    constructor() {
        this.createButtons();
    }
    createButtons() {
        for (let i=0; i<keyArr.length; i++){
            this.btnArray.push(new Button(keyArr[i]));
        }
    }
    getButtons() {
        return this.btnArray;
    }
    getButtonByID(id) {
        let res = btnArray.filter(key => key.value === id)
        return res[0];
    }
}