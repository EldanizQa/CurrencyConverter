
const to = document.querySelector("input:checked").value
const allRadioLeft = document.querySelectorAll("input[name='fromleft']")
const allRadioRight = document.querySelectorAll("input[name='toright']")
const input = document.querySelectorAll(".currency1")

let from1 = document.querySelector("input[name='fromleft']:checked").value
let to1 = document.querySelector("input[name='toright']:checked").value
let legenda = null;

allRadioRight.forEach((el) => {
    el.addEventListener('click' , async(e)=>{
        to1 = document.querySelector("input[name='toright']:checked").value 
        await getExchangeRate(from1,to1)
        convertValue(input[0],input[1])
        ExportCurency()
    } )
})

allRadioLeft.forEach((el) =>{
    el.addEventListener('click' , async(e)=>{
        from1 = document.querySelector("input[name='fromleft']:checked").value
        await getExchangeRate(from1,to1)
        console.log(to1)
        convertValue(input[0],input[1])
        ExportCurency()
    } )
})

async function getExchangeRate (from, to){
    let url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`
    const resp = await fetch(url) 
    const data = await resp.json()

    console.log('getExchangeRate')
    legenda = data.result
}



getExchangeRate(from1,to1);

function convertValue(left,right){
    console.log('convertValue')
    right.value = (left.value * legenda)
};

async function convertValue1(left,right){
    console.log('convertValue1')
    left.value = await (right.value , legenda )
};

input[0].addEventListener("keyup", () => {
    convertValue(input[0],input[1])
    // input[1].value = (input[0].value * legenda)
});

input[1].addEventListener("keyup", () => {
    convertValue(input[1],input[0])
    // input[0].value = (input[1].value * legenda)
});


 function ExportCurency() {
    let pText = document.querySelector(".pp_text")
    pText.InnerText = `${from1.value} '='  ${1*legenda}`;13
 }
 ExportCurency()


// function writeLeftCurency() { 
//     const curLeftDiv = document.querySelector(".curency-Left"); 
//     curLeftDiv.innerText = 1 left.value = legenda * rightCurrency; 
//   } 
 
//   writeRightCurency() { 
//     const curRightDiv = document.querySelector(".curency-Right"); 
//     curRightDiv.innerText = 1 ${rightCurrency} = ${legenda} ${leftCurrency}; 
//   }