class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.age = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const meuMago = new Heroi("Gandalf", 2000, "mago");
const meuGuerreiro = new Heroi("Aragorn", 87, "guerreiro");
const meuNinja = new Heroi("Hanzo", 30, "ninja");

meuMago.atacar();      
meuGuerreiro.atacar(); 
meuNinja.atacar();     