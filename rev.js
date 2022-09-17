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

const friendName = ["ramij", "rahim", "rahim", "hasan", "hasan", "tanbir", "tanbir"]
const p = [25, 78, 363, 458, 47, 25, 47]
const unic = []
for (let i = 0; i < p.length; i++) {
    let lem = p[i]
    if (unic.indexOf(lem) === -1) {
        unic.push(lem)
    }
}
console.log(unic);

class Vapa {
    constructor(narikal, gurTukra) {
        this.narikal = narikal;
        this.gurTukra = gurTukra;
    }
};
const myVapa = new Vapa(10, 4)
const hisPitha = new Vapa(15, 8)
console.log(myVapa);
console.log(hisPitha);

const latter =['a','b','c','c','d','d','e','f','g','h','i','j','k','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
't','u','v','w','x','y','z']

const ele = (num) =>{
    const plate = []
    for(let i = 0; i < num.length; i++){
        const index = num[i];
        if(plate.includes(index) === false){
            plate.push(index)
        }
        // console.log(plate);
    }
    return plate;
}
const r = ele(latter)
console.log(r);

