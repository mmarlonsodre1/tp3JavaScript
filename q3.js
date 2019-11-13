var arrayAlunos = [];
var aprovados = 0;
var reprovados = 0;

for (let i = 1; i <= 20; i++) {
    arrayAlunos.push({
        numero: i,
        nota: Math.round(Math.random() * 100)
    });
}

for (const aluno of arrayAlunos) {
    if (aluno.nota >= 50) {
        aprovados++;
        console.log(`Aluno nr ${aluno.numero} - Nota ${aluno.nota} [APROVADO]`);
    } else {
        reprovados++;
        console.log(`Aluno nr ${aluno.numero} - Nota ${aluno.nota} [REPROVADO]`);
    }
}
console.log(`APROVADOS ${aprovados} - ${(aprovados / arrayAlunos.length) * 100}%`);
console.log(`REPROVADOS ${reprovados} - ${(reprovados / arrayAlunos.length) * 100}%`);