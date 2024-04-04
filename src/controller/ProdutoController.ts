import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Camisa } from "../model/Camisa"; // teste
import { Tenis } from "../model/Tenis";  // teste

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
            console.log("\nProcurei aqui, e não achei.. ");
            console.log("           ¯|_(ツ)_|¯");
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

    listarCamisas(): void {
        console.log("Listando todas as camisas:"); //método "listar camisas"
        for (let produto of this.listaProdutos) {
            if (produto instanceof Camisa) {
                produto.visualizar();
            }
        }
    }

    listarTenis(): void {
        console.log("Listando todos os tênis:"); 
        for (let produto of this.listaProdutos) {
            if (produto instanceof Tenis) {
                produto.visualizar();//metodo "listar so tênis"
            }
        }
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("Novo produto CADASTRADO!          ");
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`Produto numero ${produto.id} foi atualizado com sucessoo!`);
        } else
            console.log("\nProcurei aqui, e não achei.. ");
            console.log("           ¯|_(ツ)_|¯"        );
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`O produto numero ${id} foi DELETADO!!`);
        } else
            console.log("\nProcurei aqui, e não achei.. ");
            console.log("\n           ¯|_(ツ)_|¯        ");
    }
}
