export class Button {
    constructor(value, printable) {
        this.value = value;
        this.printable = printable;
    }

    print() {
        console.log(this.value);
    }

    printToArea(areaId) {
        let el = document.querySelector("[id='" + areaId + "']");
        if (this.printable) {
            el.innerHTML += this.value;
        } else {
            if (this.value === 'Backspace') {
                let tmp = el.innerHTML;
                el.innerHTML = tmp.substring(0, tmp.length-1);
            } else if (this.value === 'Tab') {
                el.innerHTML += "\t";
            } else if (this.value === 'Enter') {
                el.innerHTML += "\n";
            } else if (this.value === 'ArrowLeft') {
                el.innerHTML += '&#x2190';
            } else if (this.value === 'ArrowUp') {
                el.innerHTML += '&#x2191';
            } else if (this.value === 'ArrowRight') {
                el.innerHTML += '&#x2192';
            } else if (this.value === 'ArrowDown') {
                el.innerHTML += '&#x2193';
            }
        }
    }
}