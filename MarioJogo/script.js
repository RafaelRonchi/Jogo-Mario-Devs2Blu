const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const arbor = document.querySelector('.arbor')
const grass = document.querySelector('.grass')
const gameoverText = document.querySelector('.textgameover');
const gameoverBtn = document.querySelector('.btngameover'); 
const gameBoard = document.querySelector('.game-board');
 
const botao = document.querySelector('.yoshibtn');
const yoshi = document.querySelector('.yoshi')

let isGameOver = false;

const jump = () => {
    mario.classList.add('jump')
    yoshi.classList.add('jump2')
    setTimeout(() => {
        mario.classList.remove('jump')
        yoshi.classList.remove('jump2')
    }, 800)
}

botao.addEventListener("click", function() {
    botao.style.display = 'none';
    yoshi.style.display = 'block';
    mario.style.display = 'none';
    isGameOver = false;

});

const loop = setInterval(()=>{
    if (!isGameOver) {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px',''))
    const yoshiPositon = Number(window.getComputedStyle(yoshi).bottom.replace('px',''))

    if(yoshi.style.display != 'block'){
        if(pipePosition <= 120 && pipePosition > -10 && marioPosition <= 67){
            isGameOver = true;
            pipe.style.animationPlayState  = 'paused'

            mario.style.animationPlayState  = 'none'
            mario.style.bottom = `${mario}px`
            mario.src = './imagens-mario/game-over.png'
            mario.style.width = '95px'
            mario.style.marginLeft = '20px'
            mario.style.animation = 'morrer 3s'
            isGameOver = true;
            botao.style.display = 'none';
            grass.style.animationPlayState  = 'paused'
            grass.style.right = `${grass}px`

            yoshi.style.display = 'none';
            mario.style.display = 'block';

            arbor.style.animationPlayState  = 'paused'
            arbor.style.right = `${arbor}px`

            clouds.style.animationPlayState  = 'paused'
            clouds.style.right = `${clouds}px`
            mario .classList.remove('jump')
            setTimeout(() => {
            gameoverText.style.display = 'block';
            gameoverBtn.style.display = 'block';
            gameBoard.style.display = 'none';
            document.body.classList.add('gameover');
            }, 2000);
            clearInterval()
        }
    } else{
        if(pipePosition <= 120 && pipePosition > -10 && yoshiPositon <= 67){
            isGameOver = true;
            pipe.style.animationPlayState  = 'paused'

            mario.style.animationPlayState  = 'none'
            mario.style.bottom = `${mario}px`
            mario.src = './imagens-mario/game-over.png'
            mario.style.width = '95px'
            mario.style.marginLeft = '20px'
            mario.style.animation = 'morrer 3s'
            isGameOver = true;
            botao.style.display = 'none';
            grass.style.animationPlayState  = 'paused'
            grass.style.right = `${grass}px`

            yoshi.style.display = 'none';
            mario.style.display = 'block';

            arbor.style.animationPlayState  = 'paused'
            arbor.style.right = `${arbor}px`

            clouds.style.animationPlayState  = 'paused'
            clouds.style.right = `${clouds}px`
            mario .classList.remove('jump')
            setTimeout(() => {
            gameoverText.style.display = 'block';
            gameoverBtn.style.display = 'block';
            gameBoard.style.display = 'none';
            document.body.classList.add('gameover');
            }, 2000);
            clearInterval()
        } 
    }
}
},10)

document.addEventListener('keydown', () => {
    if (!isGameOver) { 
        jump();
    }
});