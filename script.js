let dia = 27
let mes = "fevereiro"
let ano = 2008
let idade = 2022 - ano
let humano = true
let nome = "Raimundo"
let sobrenome = "Silveira"
let primeiraLetra = nome[0]

if(idade<18 && humano) {
    console.log("Parabéns. Você é um adulto jovem humano!")
}else {
    console.log("Desculpe, você é menor de 18 ou não é humano")
}

if(mes=="janeiro" || mes=="dezembro"){
    console.log("Seu aniversário acontece nas férias!")
}else {
    console.log("Seu aniversário não é nas férias.")
}

if(primeiraLetra== String("R")){
    console.log("Seu nome começa com R!")
}else {
    console.log("Seu nome não começa com R.")
}

if(sobrenome.length>6 || primeiraLetra==String("E")){
    console.log("Nome ou sobrenome corresponde condição")
}else {
    console.log("Sobrenome curto ou nome que não começa com E")
}