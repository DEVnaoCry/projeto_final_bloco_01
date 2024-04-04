import { Produto } from "../model/Produto";


export interface ProdutoRepository {

    // Métodos do CRUD ( Create, Read, Update, Delete)
    procurarPorId(id: number): void;
    listarTodas(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

}