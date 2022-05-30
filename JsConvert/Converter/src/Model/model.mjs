export default class Model {
    constructor() {
        this.allRadioLeft = document.querySelectorAll("input[name='fromleft']")
        this.allRadioRight = document.querySelectorAll("input[name='toright']")

        this.legenda = null;
    }
    convertValue(left,right){
        right.value = (left.value * this.legenda)
    };
}