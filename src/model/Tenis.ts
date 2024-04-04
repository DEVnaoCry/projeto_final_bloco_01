import { Produto } from "./Produto";

export class Tenis extends Produto {

    private _cor: string;

    constructor(id: number, nome: string, tipo: number, preco: number, cor: string) {
        super(id, nome, tipo, preco); // Atributos da Classe Produto 
        this._cor = cor;
    }

    /** 
     * Getter cor 
     * @return {string} 
     */
    public get cor(): string {
        return this._cor;
    }

    /** 
     * Setter cor 
     * @param {string} value 
     */
    public set cor(value: string) {
        this._cor = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Cor do Tênis: ${this._cor}`);
    }
}
