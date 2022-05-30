export default class Controller {
    constructor(view, model) {
      this.view = view;
      this.model = model;
    }
  
    init() {
      this.render();
    }
  
    async getExchangeRate(from, to) {
      let url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
      const resp = await fetch(url);
      const data = await resp.json();
  
      this.model.legenda = data.result;
      this.valueConverter();
    }
  
    valueConverter() {
      this.model.leftValue = document.querySelector("#legend");
      this.model.rightValue = document.querySelector("#legend2");
  
      this.model.leftValue.innerText = `1 ${this.from} = ${this.model.legenda} ${this.to}`;
      this.model.rightValue.innerText = `1 ${this.to} = ${(1 / this.model.legenda).toFixed(6)} ${
        this.from
      }`;
    }
  
    render() {

  
      this.getExchangeRate(this.model.leftValue, this.model.rightValue);
  
  
      this.view.allRadioRight.forEach((el) => {
        el.addEventListener("click", async (e) => {
          this.model.rightValue = e.target.value
          this.to = document.querySelector(
            "input[name='toright']:checked"
          ).value;
  
          await this.getExchangeRate(this.from, this.to);
          this.model.convertValue(this.view.inputFrom, this.view.inputTo);
        });
      });
  
      this.view.allRadioLeft.forEach((el) => {
        el.addEventListener("click", async (e) => {
          this.model.leftValue = e.target.value
          this.from = document.querySelector(
            "input[name='fromleft']:checked"
          ).value;
          await this.getExchangeRate(this.from, this.to);
  
          this.model.convertValue(this.view.inputFrom, this.view.inputTo);
          this.valueConverter();
        });
      });
  
      this.view.inputFrom.addEventListener("keyup", () => {
        this.model.convertValue(this.view.inputFrom, this.view.inputTo);
      });
  
      this.view.inputTo.addEventListener("keyup", () => {
        this.model.convertValue(this.view.inputTo, this.view.inputFrom);
      });
    }
  }
  