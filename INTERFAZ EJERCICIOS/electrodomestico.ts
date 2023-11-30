class Electrodomestico {
    private precio: number;
    private color: string;

    constructor(precio: number, color: string) {
        this.precio = precio;
        this.color = color;
    }

    getPrecio(): number {
        return this.precio;
    }

    getColor(): string {
        return this.color;
    }
}
class Televisor extends Electrodomestico {
    private pulgadas: number;

    constructor(precio: number, color: string, pulgadas: number) {
        super(precio, color);
        this.pulgadas = pulgadas;
    }

    getPulgadas(): number {
        return this.pulgadas;
    }
}

class Nevera extends Electrodomestico {
    private capacidadLitros: number;

    constructor(precio: number, color: string, capacidadLitros: number) {
        super(precio, color);
        this.capacidadLitros = capacidadLitros;
    }

    getCapacidadLitros(): number {
        return this.capacidadLitros;
    }
}

class Lavadora extends Electrodomestico {
    private cargaKg: number;

    constructor(precio: number, color: string, cargaKg: number) {
        super(precio, color);
        this.cargaKg = cargaKg;
    }

    getCargaKg(): number {
        return this.cargaKg;
    }
}
const electrodomestico = new Electrodomestico(500.0, "Blanco");
const televisor = new Televisor(800.0, "Negro", 55);
const nevera = new Nevera(600.0, "Gris", 400);
const lavadora = new Lavadora(700.0, "Blanco", 8);

console.log(`Electrodoméstico - Precio: ${electrodomestico.getPrecio()}, Color: ${electrodomestico.getColor()}`);
console.log(`Televisor - Precio: ${televisor.getPrecio()}, Color: ${televisor.getColor()}, Pulgadas: ${televisor.getPulgadas()}`);
console.log(`Nevera - Precio: ${nevera.getPrecio()}, Color: ${nevera.getColor()}, Capacidad en litros: ${nevera.getCapacidadLitros()}`);
console.log(`Lavadora - Precio: ${lavadora.getPrecio()}, Color: ${lavadora.getColor()}, Carga en kg: ${lavadora.getCargaKg()}`);
