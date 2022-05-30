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
      this.a();
    }
  
    a() {
      const a = document.querySelector("#legend");
      const b = document.querySelector("#legend2");
  
      a.innerText = `1 ${this.from1} = ${this.model.legenda} ${this.to1}`;
      b.innerText = `1 ${this.to1} = ${(1 / this.model.legenda).toFixed(6)} ${
        this.from1
      }`;
    }
  
    render() {
      this.input = document.querySelectorAll(".currency1");
  
      this.from1 = document.querySelector("input[name='fromleft']:checked").value;
      this.to1 = document.querySelector("input[name='toright']:checked").value;
  
      this.getExchangeRate(this.from1, this.to1);
  
  
      this.model.allRadioRight.forEach((el) => {
        el.addEventListener("click", async (e) => {
          this.to1 = document.querySelector(
            "input[name='toright']:checked"
          ).value;
  
          await this.getExchangeRate(this.from1, this.to1);
          this.model.convertValue(this.input[0], this.input[1]);
        });
      });
  
      this.model.allRadioLeft.forEach((el) => {
        el.addEventListener("click", async (e) => {
          this.from1 = document.querySelector(
            "input[name='fromleft']:checked"
          ).value;
          await this.getExchangeRate(this.from1, this.to1);
  
          this.model.convertValue(this.input[0], this.input[1]);
          this.a();
        });
      });
  
      this.input[0].addEventListener("keyup", () => {
        this.model.convertValue(this.input[0], this.input[1]);
      });
  
      this.input[1].addEventListener("keyup", () => {
        this.model.convertValue(this.input[1], this.input[0]);
      });
    }
  }
  