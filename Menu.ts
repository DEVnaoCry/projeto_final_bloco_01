import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

let opcao, id, tipo, preco: number;
let nome, cor: string;
let tipoProduto = ["Camisa", "Tenis"];

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
                console.log(colors.bg.yellow, colors.fg.greenstrong,
                    "\nCadastrar Produto!");

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:

                        break;
                    case 2:

                        break;
                }



                console.log("Produto cadastrado com sucesso");
                keyPress();
                break;
            case 2:
                console.log("Listar todas os Produtos!");
                keyPress();
                break;
            case 3:
                console.log("Listar Produto pelo ID!");
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

/* Função com os meus dados */
export function sobre(): void {

    console.log("_________________________________________");
    console.log("  Desenvolvido por: Filipe Santiago      ");
    console.log("      https://github.com/DEVnaoCry       ");
    console.log("                                         ");
    console.log("#########################################");
    

}

main();