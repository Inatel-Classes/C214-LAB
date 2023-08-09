class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }

  adicionarNota(nota) {
    this.notas.push(nota);
    console.log(`Nota ${nota} adicionada para o aluno ${this.nome}.`);
  }

  calcularMedia() {
    if (this.notas.length === 0) {
      console.log('O aluno não possui notas para calcular a média.');
      return 0;
    }

    const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
    const media = somaNotas / this.notas.length;
    return media.toFixed(2);
  }

  verificarAprovacao(mediaMinima = 7) {
    const media = this.calcularMedia();
    if (media >= mediaMinima) {
      return `${this.nome} foi aprovado com média ${media}.`;
    } else {
      return `${this.nome} foi reprovado com média ${media}.`;
    }
  }
}

// Criando objetos da classe Aluno
const aluno1 = new Aluno('João');
const aluno2 = new Aluno('Maria');

// Adicionando notas aos alunos
aluno1.adicionarNota(8);
aluno1.adicionarNota(7);
aluno2.adicionarNota(6);
aluno2.adicionarNota(9);

// Calculando média e verificando aprovação
console.log(aluno1.verificarAprovacao());
console.log(aluno2.verificarAprovacao());
