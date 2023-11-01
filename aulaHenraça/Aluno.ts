import { Pessoa } from "./Pessoa";

class Aluno extends Pessoa{
    private _turma: string = '';
}

const aluno = new Aluno("Gustavo", "81047241")


export default Aluno
