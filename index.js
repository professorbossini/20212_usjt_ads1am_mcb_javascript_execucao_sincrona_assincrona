// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         //console.log(`${erro ? erro : conteudo.toString()}`)
//         if (erro){
//             console.log ("Erro: " + erro)
//         }
//         else{
//             console.log ("Conteúdo lido: " +  conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function (erro){
//                 console.log(`${erro ? erro : 'Salvou o dobro com sucesso'}`)
//             }
//             fs.writeFile ('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// abrirArquivo("arquivo.txt")




// const fs = require('fs')
// const abrirArquivo = function (nomeArquivo) {

//     const exibirConteudo = function (erro, conteudo) {
//         console.log("1 Terminou de processar o arquivo...")
//         if (erro) {
//             console.log(`Erro: ${erro}`)
//         }
//         else {
//             console.log(conteudo.toString())
//         }
//     }
//     console.log ("2 Vai ler o arquivo...")
//     fs.readFile(nomeArquivo, exibirConteudo)
// }

// //vamos criar um arquivo.txt no mesmo diretório
// //e adicionar algum conteúdo a ele

// console.log ("3 Chamou a funcao abrir arquivo...")
// abrirArquivo("arquivo.txt")
// console.log ("4 Encerrando a execução do script principal")





// function demorada (tempo){
//     console.log (`demorada: ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     console.log (`Terminando a demorada de ${tempo} segundos`)
//     return d
// }

// setTimeout(function(){
//     demorada(3000),
//     3000
// })

// setTimeout (function(){
//     demorada(1000),
//     1000
// })

// console.log("Chegou ao fim do script principal")


// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9


// setTimeout(
//     function(){
//         const d = demorada()
//         console.log("d: " + d)
//     },
//     0
// )

// const e = a + b
// console.log("e: " + e)






// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos){

//     }
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9

// const d = demorada()
// console.log ("d: " + d)

// const e = 2 + a + b
// console.log("e: " + e)
