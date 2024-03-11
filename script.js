const developerText = document.getElementById('developer-text');
const text = developerText.innerText;
developerText.innerText = '';

let index = 0;

function showText() {
    developerText.innerText = text.substring(0, index);
    index++;
    if (index > text.length) index = 1;
}

setInterval(showText, 380);