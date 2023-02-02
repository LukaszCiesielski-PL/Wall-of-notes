document.querySelector('.red').addEventListener('click', changeToRed);
document.querySelector('.blue').addEventListener('click', changeToBlue);
document.querySelector('.yellow').addEventListener('click', changeToYellow);
document.querySelector('.green').addEventListener('click', changeToGreen);
document.querySelector('.red2').addEventListener('click', changeToRedText);
document.querySelector('.blue2').addEventListener('click', changeToBlueText);
document.querySelector('.yellow2').addEventListener('click', changeToYellowText);
document.querySelector('.green2').addEventListener('click', changeToGreenText);


function changeToRed(ev){
    const colR = ev.target.parentElement.parentElement;
    colR.classList.add('noteColorRed');
}

function changeToBlue(ev){
    const colB = ev.target.parentElement.parentElement;
    colB.classList.add('noteColorBlue');
}

function changeToYellow(ev){
    const colC = ev.target.parentElement.parentElement;
    colC.classList.add('noteColorYellow');
}

function changeToGreen(ev){
    const colG = ev.target.parentElement.parentElement;
    colG.classList.add('noteColorGreen');
}

function changeToRedText(ev){
    const colR = ev.target.parentElement.parentElement;
    colR.classList.add('noteColorRedText');
}

function changeToBlueText(ev){
    const colB = ev.target.parentElement.parentElement;
    colB.classList.add('noteColorBlueText');
}

function changeToYellowText(ev){
    const colC = ev.target.parentElement.parentElement;
    colC.classList.add('noteColorYellowText');
}

function changeToGreenText(ev){
    const colG = ev.target.parentElement.parentElement;
    colG.classList.add('noteColorGreenText');
}