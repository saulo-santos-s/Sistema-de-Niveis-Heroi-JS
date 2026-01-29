const NomeHeroi = "Saulo"
let xp = 1200
let nivel = ""
if (xp < 1000) {
    nivel = "Ferro"
}
else if (xp < 2000) {
    nivel = "Bronze"
}
else if (xp < 5000) {
    nivel = "Prata"
}
else if (xp < 7000) {
    nivel = "Ouro"
}
else if (xp < 8000) {
    nivel = "platina"
}
else if ( xp < 9000) {
    nivel = "Ascendente"
}
else if (xp < 10000){
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}
console.log(("O Heroi de nome " )+ [NomeHeroi]+(" está no nivel de ") + [nivel])
