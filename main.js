const $ = (selector) => document.querySelector(selector);

//variables

let body = document.body;
let imgSection = $('#imgSection');
let txtSection = $('#txtSection');
let contMeme = $('.container');
let topText = $('.topText')
let imgContainer= $('.imgContainer');

let imgPanelBtn = $('#imgBtn');
let txtPanelBtn = $('#txtBtn');
let lightModeBtn = $('#lightMode');
let downloadBtn = $('.downloadBtn');

let inpUrl = $('#url');
let imgUrl = $('#imgUrl');

let inpImgColor = $('#imgColorBg');
let inpBrightness = $('#brightness');
let inpOpacity = $('#opacity') ;
let inpContrast = $('#contrast');
let inpBlur = $('#blur');
let inpGrayScale = $('#grayscale');
let inpSepia = $('#sepia');
let inpHueRotate = $('#hue-rotate');
let inpSaturate = $('#saturate');
let inpInvert = $('#invert');

let topTextArea = $('#topTextArea');

//funciones

//descargar meme, resetiar filtros
const downloadMeme = ()=>{
domtoimage.toBlob(contMeme).then(function (blob) {
    saveAs(blob, 'Mi_Meme.jpg');
});
}

//eventos

imgPanelBtn.addEventListener('click', ()=>{
    if(imgSection.style.display = 'block'){
        txtSection.style.display = 'none'
    } else {
        txtSection.style.display = 'block'
    }
})

txtPanelBtn.addEventListener('click', ()=>{
    if(txtSection.style.display = 'block'){
        imgSection.style.display = 'none'
    } else {
        imgSection.style.display = 'block'
    }
})

lightModeBtn.addEventListener('click', ()=>{
    body.classList.toggle('lightMode');
    body.classList.contains('lightMode');
    console.log(body.classList.contains('lightMode'));
    if(body.classList.contains('lightMode')){
       lightModeBtn.innerText = '🌙 Modo Oscuro' 
    } else {
        lightModeBtn.innerText = '☀️ Modo Claro' 
    }
})

downloadBtn.addEventListener('click', downloadMeme);

inpUrl.addEventListener('input', ()=>{
    imgUrl.setAttribute('src', inpUrl.value)
})



topTextArea.addEventListener('input', ()=>{
    topText.innerText = topTextArea.value
})


inpImgColor.addEventListener("change", () => {
    imgContainer.style.backgroundColor = inpImgColor.value;
  });











