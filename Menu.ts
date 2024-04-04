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

        console.log(colors.bg.yellow, colors.fg.greenstrong,
        "\Entre com a opção desejada:                    ");
        opcao = readlinesync.questionInt("");

        switch (opcao) {
            case 1:
                console.log("Cadastrar Produto!");

                let nome = readlinesync.question("Digite o Nome do Produto: ");

                let tipo = readlinesync.keyInSelect(TipodeProdutos, "Escolha o tipo do Produto: ", { cancel: 'Sair' });

                let preco = readlinesync.questionFloat("Digite o preco: ");

                if (tipo === 0) { // Camisa
                    let tipoCamisa = readlinesync.question("Digite o tipo da camisa: ");
                    let camisa = new Camisa(produtos.length + 1, nome, tipo + 1, preco, tipoCamisa);
                    produtos.push(camisa);
                } else if (tipo === 1) { // Tenis
                    let cor = readlinesync.question("Digite a cor do tênis: ");
                    let tenis = new Tenis(produtos.length + 1, nome, tipo + 1, preco, cor);
                    produtos.push(tenis);
                }

                console.log("Produto cadastrado com sucesso");
                keyPress();
                break;
            case 2:
                console.log("Listar todas os Produtos!");
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
                    console.log("Produto não encontrado.");
                }
                keyPress();
                break;
            case 4:
                console.log("Atualizar Produto!");
                keyPress();
                break;
            case 5:
                console.log("Deletar Produto!");
                keyPress();
                break;
            case 0:
                console.log("\nMano Sports, Isso é preço de irmão!\n");
                console.log("\nagradecemos sua preferencia!\n");
                sobre();
                break;
            default:
                console.log("escolha uma opção válida.");
                keyPress();
                break;
        }
    } while (opcao !== 0);

}

function keyPress(): void {

    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

export function sobre(): void { // "saiba mais"
    console.log("_________________________________________");
    console.log("  Desenvolvido por: Filipe Santiago      ");
    console.log("      https://github.com/DEVnaoCry       ");
    console.log("                                         ");
    console.log("#########################################");
    

}

main();