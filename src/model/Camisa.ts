import { Produto } from "./Produto";

export class Camisa extends Produto {

    private _tipoCamisa: string;

    constructor(id: number, nome: string, tipo: number, preco: number, tipoCamisa: string) {
        super(id, nome, tipo, preco); // Atributos da Classe Produto
        this._tipoCamisa = tipoCamisa;
    }

    /**
     * Getter tipoCamisa
     * @return {string}
     */
    public get tipoCamisa(): string {
        return this._tipoCamisa;
    }

    /**
     * Setter tipoCamisa
     * @param {string} value
     */
    public set tipoCamisa(value: string) {
        this._tipoCamisa = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Tipo de Camisa: ${this._tipoCamisa}`);
    }
}
