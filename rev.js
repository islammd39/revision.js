const chalerDam = 28;
const dalerDam = 33;


function jogKor (first,second){
    const jogFol =  first + second;
    return jogFol;
}
const total = jogKor(chalerDam,dalerDam)
// console.log(total);

function duiGunKor(num){
    const gunFol =  num * 2;
    return gunFol;
}

function dharDay(dharAmount){
    const frinderTaka = dharAmount;
    return frinderTaka;
}
const dharLagbe = duiGunKor(total)
const takaPaichi = dharDay(dharLagbe)
console.log(takaPaichi)