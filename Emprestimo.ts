class Emprestimo{
    private livro: string = '';
    private usuario: string = '';
    private dataEmprestimo: Date = new Date();
    private dataDevolucaoPlanejada: Date = new Date();
    private estado: string = '';
}

//new date faz com que o valor padrao comece na data atual