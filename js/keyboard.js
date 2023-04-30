const keyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
            this.btnArray.push(new Button(keyArr[i]));
            console.log('btn = ' + this.btnArray[i].value);
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