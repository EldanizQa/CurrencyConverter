export default class View {
    constructor() {
        this.from = document.querySelector("input[name='fromleft']:checked")
        this.to = document.querySelector("input[name='toright']:checked")
        this.allRadioLeft = document.querySelectorAll("input[name='fromleft']")
        this.allRadioRight = document.querySelectorAll("input[name='toright']")
        this.inputFrom = document.querySelector(".inputFrom");
        this.inputTo = document.querySelector(".inputTo");
    }
    
}