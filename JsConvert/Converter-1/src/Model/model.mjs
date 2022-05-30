export default class Model {
    constructor() {
        this.leftValue = "RUB";
        this.rightValue = "USD";
        this.legenda = null;
    }
    convertValue(left,right){
        right.value = (left.value * this.legenda)
    };
}