const chalerDam = 28;
const dalerDam = 33;


function jogKor(first, second) {
    const jogFol = first + second;
    return jogFol;
}
const total = jogKor(chalerDam, dalerDam)
// console.log(total);

function duiGunKor(num) {
    const gunFol = num * 2;
    return gunFol;
}

function dharDay(dharAmount) {
    const frinderTaka = dharAmount;
    return frinderTaka;
}

const dharLagbe = duiGunKor(total)
const takaPaichi = dharDay(dharLagbe)
console.log(takaPaichi)

const parHours = (second) => {
    const minutes = second / 60
    const hours = minutes / 60
    return hours;
}
const result = parHours(10800)
const init = parseInt(result)
// console.log(init);

const friendName = ["ramij","rahim","hasan","tanbir"]
const p = [25,78,363,458,47]
for(let i = 0; i < p.length; i++){
    let lem = p[i]
    lem += 10;
    console.log(lem);
}