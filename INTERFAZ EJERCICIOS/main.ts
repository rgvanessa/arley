
class Vehículo {
    constructor(private tipo: string) {}
  
    desplazarse(): void {
      console.log(`El ${this.tipo} se está desplazando.`);
    }
  }
  
  // Subclase Coche
  class Coche extends Vehículo {
    constructor() {
      super("Coche");
    }
  
    desplazarse(): void {
      console.log("El coche se desplaza por tierra.");
    }
  }
  
  // Subclase Barco
  class Barco extends Vehículo {
    constructor() {
      super("Barco");
    }
  
    desplazarse(): void {
      console.log("El barco se desplaza por agua.");
    }
  }
  
  // Subclase Avión
  class Avión extends Vehículo {
    constructor() {
      super("Avión");
    }
  
    desplazarse(): void {
      console.log("El avión se desplaza por aire.");
    }
  }
  
  // Crear instancias de las subclases
  const miCoche = new Coche();
  const miBarco = new Barco();
  const miAvión = new Avión();
  
  // Llamar al método desplazarse de cada instancia
  miCoche.desplazarse();
  miBarco.desplazarse();
  miAvión.desplazarse();