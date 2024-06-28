

const prompt = require("prompt-sync")({ sigint: true });
let num = prompt (" Digite um número ")


if (isNaN(num)|| num < 0){
    console.log("Numero invalido, escolha outro numero")
}else{
    let fatorial = 1;
    for(let i = 1; i < num; i++) {
    fatorial *= i;
    }
console.log(`O fatorial de ${num} é ${fatorial}.`)

}
process.exit()


