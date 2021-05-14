const playoneScore = document.querySelector('#first');
const playtwoScore = document.querySelector('#second');
const rdm = document.querySelector('#rdm');
const resetBtn = document.querySelector('#reset');
const choose = document.querySelector('#player');
const img = document.querySelector('#pic');
const wl = document.querySelector('.subtitle');
let endScore = 11;

let isGameover = false;

let i = 0;
let n = 0;
rdm.addEventListener('click', function () {
    if (!isGameover) {

        if (rand() === 1) {
            playoneScore.innerText = i += 1;
        } else {
            playtwoScore.innerText = n += 1;
        } if (parseInt(playoneScore.innerText) >= 10 & parseInt(playtwoScore.innerText) >= 10 & playoneScore.innerText === playtwoScore.innerText) {
            endScore = parseInt(playoneScore.innerText) + 2;
        }
    }
    if (i === endScore | n === endScore) {
        isGameover = true;
        if (parseInt(playoneScore.innerText) === endScore & choose.value === "Player1 (Left)") {
            img.src = "http://up.54fcnr.com/pic_source/55/cc/a5/55cca5e9f85ad2f4c43feb7a50167922.gif";
            wl.innerText = "Player1 Win!!!";
        }
        if (parseInt(playtwoScore.innerText) === endScore & choose.value === "Player2 (Right)") {
            img.src = "http://up.54fcnr.com/pic_source/55/cc/a5/55cca5e9f85ad2f4c43feb7a50167922.gif";
            wl.innerText = "Player2 Win!!!";
        }
        if (parseInt(playoneScore.innerText) === endScore & choose.value !== "Player1 (Left)") {
            img.src = "https://cdn2.ettoday.net/images/1857/1857303.gif";
            wl.innerText = "Player2 Lose..."
        }
        if (parseInt(playtwoScore.innerText) === endScore & choose.value !== "Player2 (Right)") {
            img.src = "https://cdn2.ettoday.net/images/1857/1857303.gif";
            wl.innerText = "Player1 Lose...";
        }
        if (parseInt(playoneScore.innerText) === endScore) {
            playoneScore.style.color = 'green';
            playtwoScore.style.color = 'red';
            rdm.disabled = true;
        } else {
            playoneScore.style.color = 'red';
            playtwoScore.style.color = 'green';
            rdm.disabled = true;
        };
    }
})




resetBtn.addEventListener('click', reset);

function rand() {
    return Math.floor(Math.random() * 2)
}

function reset() {
    isGameover = false;
    playoneScore.innerText = 0;
    playtwoScore.innerText = 0;
    endScore = 11;
    i = 0;
    n = 0;
    playoneScore.style.color = '';
    playtwoScore.style.color = '';
    rdm.disabled = false;
    img.src = "https://images.unsplash.com/photo-1584813539806-2538b8d918c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
    choose.value = "Player1 (Left)";
    wl.innerText = "Use the button below to get score";
}








