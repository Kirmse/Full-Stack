// var estudanteNome = "Helena";
// console.log(estudanteNome);

// const EstudanteDoNome = "Heleina";
// console.log(EstudanteDoNome);

// for ----------------------------


// let listaEstudates = ["Helena" , "Enrico" , "Calebe" , "Flora"];
// let quantidadeDeEstudantes = listaEstudates.length;


// for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
//     const alunoCorrente = listaEstudates[indice];
//     console.log(alunoCorrente);
// }


let listaEstudates = ["Helena" , "Enrico" , "Calebe" , "Flora"];
let quantidadeDeEstudantes = listaEstudates.length;
let inicio = 0;

// do ------------------------ do \\

do {
    console.log(listaEstudates[inicio]);
    inicio ++;
    
} while (inicio < quantidadeDeEstudantes);


// while -------------------- while \\
inicio = 0;

while (inicio < quantidadeDeEstudantes) {
    console.log(listaEstudates[inicio]);
    inicio ++;
}
