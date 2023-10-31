class Emprestimo{
    private _livro: string = '';
    private _usuario: string = '';
    private _dataEmprestimo: Date = new Date();
    private _dataDevolucaoPlanejada: Date = new Date();
    private _estado: string = '';
}

//new date faz com que o valor padrao comece na data atual