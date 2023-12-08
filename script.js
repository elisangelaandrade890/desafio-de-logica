console.log(`Ano Novo está Chegando!!`)

let cantora = `Mariah Carey`

let idade = 54

let anoAtual = 2023

let nascimento = anoAtual - idade

console.log(`Ela nasceu em ${nascimento}`)

let quartaFeira = true

console.log(quartaFeira)

console.log(typeof quartaFeira)


if (idade >= 18) {
    console.log(`Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de ${cantora}.`)
} else {
    console.log(`Sinto muito, mas assistirá da tv globo`)
}

let mesAniversario = `Agosto`

if( mesAniversario === `Agosto` || mesAniversario === `Dezembro` || mesAniversario === `Junho`){
    console.log(`Uma ou mais opções estão corretas`)
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${mesAniversario}`)
}