import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Camisa } from "../model/Camisa"; // teste
import { Tenis } from "../model/Tenis";  

export class ProdutoController implements ProdutoRepository {
    private listaProdutos: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    public gerarId(): number {
        return ++this.id;
    }

    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if (buscaproduto !== null)
            buscaproduto.visualizar();
        else
            console.log("\nProduto não foi encontrado!");
    }

    buscarNoArray(id: number) {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

        return null;
    }

    listarTodas(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    // Novo método para listar apenas camisas
    listarCamisas(): void {
        console.log("Listando todas as camisas:");
        for (let produto of this.listaProdutos) {
            if (produto instanceof Camisa) {
                produto.visualizar();
            }
        }
    }

    listarTenis(): void {
        console.log("Listando todos os tênis:");//método para listar apenas tênis
        for (let produto of this.listaProdutos) {
            if (produto instanceof Tenis) {
                produto.visualizar();
            }
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("O produto foi adicionado!");
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto numero ${produto.id} foi atualizado com exito!`);
        } else
            console.log("\nProduto nao foi encontrado!");
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`O produto numero ${id} foi excluido com exito!`);
        } else
            console.log("\nProcurei aqui, e não achei..¯|_(ツ)_|¯");
    }
}
