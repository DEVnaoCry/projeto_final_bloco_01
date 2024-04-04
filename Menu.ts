import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Camisa } from "./src/model/Camisa";
import { Tenis } from "./src/model/Tenis";

let opcao, id, tipo, preco: number;
let nome, cor: string;
let TipodeProdutos = ["Camisa", "Tenis"];
let produtos: (Camisa | Tenis)[] = [];

export function main() {

    do {
        console.log (colors.bg.yellow, colors.fg.greenstrong,
                    "                                                            ");
        console.log(`  __  __                     ____                   _       `        );
        console.log(` |  \\/  | __ _ _ __   ___   / ___| _ __   ___  _ __| |_ ___ `       );
        console.log(` | |\\/| |/ _\` | '_ \\ / _ \\  \\___ \\| '_ \\ / _ \\| '__| __/ __|`);
        console.log(` | |  | | (_| | | | | (_) |  ___) | |_) | (_) | |  | |_\\__ \\`      );
        console.log(` |_|  |_|\\__,_|_| |_|\\___/  |____/| .__/ \\___/|_|   \\__|___/`    );
        console.log(`                                  |_|                       `        );
        console.log("______________________________________________________");
        console.log("            1 - Cadastrar Produto                     ");
        console.log("            2 - Listar todos os Produtos              ");
        console.log("            3 - Listar Produto pelo ID                ");
        console.log("            4 - Atualizar Produto                     ");
        console.log("            5 - Deletar Produto                       ");
        console.log("            0 - Sair                                  ");
        console.log("______________________________________________________");
        
        console.log("                                                     ",
        colors.reset);

        console.log(colors.bg.greenbright, colors.fg.white,
          "\nEscolha uma opção, Mano:                  ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log(colors.bg.greenbright, colors.fg.white,
                            "\nCadastrar Produtos!");

                let tipo = readlinesync.keyInSelect(TipodeProdutos, "Yeah Brother, chegou produto novo na loja?: ", { cancel: 'Sair' });
                let nome = readlinesync.question("Qual e nome do produto?: ");

                let preco = readlinesync.questionFloat("Iradooo! E o PRECO?: ");

                if (tipo === 0) { // Camisa
                    let tipoCamisa = readlinesync.question("Digite o tipo da camisa: "); //pensar logica "tamanhos"(p,m,g)
                    let camisa = new Camisa(produtos.length + 1, nome, tipo + 1, preco, tipoCamisa);
                    produtos.push(camisa);


                } else if (tipo === 1) { // Tenis
                    let cor = readlinesync.question("Digite a cor do tenis: ");//pensar logica "tamanhos"(36,37,38)
                    let tenis = new Tenis(produtos.length + 1, nome, tipo + 1, preco, cor);
                    produtos.push(tenis);
                }

                console.log("Wow, cadastramos um novo produto!");
                keyPress();
                break;
            case 2:
                console.log("Listar todos os Produtos!");
                produtos.forEach(produto => produto.visualizar());
                keyPress();
                break;
            case 3:
                console.log("Listar Produto pelo ID!");
                let idBuscar = readlinesync.questionInt("Digite o ID do Produto: ");
                let produtoEncontrado = produtos.find(produto => produto.id === idBuscar);
                if (produtoEncontrado) {
                    produtoEncontrado.visualizar();
                } else {
                    console.log(colors.bg.redbright, colors.fg.white,
                                "\nProcurei aqui, e não achei.. ");
                    console.log("           ¯|_(ツ)_|¯"          );
                }
                keyPress();
                break;
            case 4:
                console.log("Atualizar Produto!");
                let idAtualizar = readlinesync.questionInt("Digite o ID do Produto para atualizar: ");
                let produtoParaAtualizar = produtos.find(produto => produto.id === idAtualizar);
                if (produtoParaAtualizar) {
                    let novoNome = readlinesync.question("Digite o novo nome do Produto: ");
                    produtoParaAtualizar.nome = novoNome; 
                    console.log("Produto atualizado com sucesso.");

            }   else {
                    console.log(colors.bg.whitebright, colors.fg.redstrong,
                             "\nProcurei aqui, e não achei.. ");
                    console.log("           ¯|_(ツ)_|¯"       );
                }
                keyPress();
                break;

            case 5:
                console.log("Deletar Produto!");
                let idDeletar = readlinesync.questionInt("Digite o ID do Produto para deletar: ");
                let indiceParaDeletar = produtos.findIndex(produto => produto.id === idDeletar); //pensar pergunta de verficacao, questionando se o cliente realmente deseja excluir o produto
                if (indiceParaDeletar !== -1) {
                    produtos.splice(indiceParaDeletar, 1);
                    console.log("Produto excluido com sucesso."); //pensar em alguma logica de backup, caso o cliente tente voltar atras. mesmo apagando

            }   else{
                    console.log(colors.bg.redbright, colors.fg.white,
                        "\nProcurei aqui, e não achei.. "  );
                    console.log("           ¯|_(ツ)_|¯"    );
                }
                keyPress();
                break;

            case 0:
                console.log(colors.bg.green, colors.fg.whitestrong,
                      "\nMano Sports, parece coisa de 'irmão!'\n");
                console.log("=====> Agradecemos sua preferencia!");
                sobre();
                break;
            default:
                console.log(colors.bg.redbright, colors.fg.white,
                           "\nNao inventa, Mano.. ");
                console.log("           ¯|_(ツ)_|¯");
                keyPress();
                break;
        }
    } while (opcao !== 0);

}

function keyPress(): void {

    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void { // "saiba mais sobre o DevnaoCry!!"
    console.log("_________________________________________");
    console.log("########=> Desenvolvido por: $an.###### " );
    console.log(" #### https://github.com/DEVnaoCry   ### ");
    console.log("  ####                            ### ");
    console.log("##################################");
    

}

main();