// Definición de la clase Persona
class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;
  
    constructor(nombre: string, edad: number, documentoIdentidad: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.documentoIdentidad = documentoIdentidad;
    }

    mayorEdad(): void{
        if(this.edad > 18){
            console.log("es mayor de edad ");
            
        }else{
            console.log("no es mayor de edad  ");
            
        }

    }
  
    caminar(): void {
      console.log(`${this.nombre} está caminando.`);
    }
  
    hablar(mensaje: string): void {
      console.log(`${this.nombre} está hablando: "${mensaje}"`);
    }
  
    comer(comida: string): void {
      console.log(`${this.nombre} está comiendo ${comida}.`);
    }
  }
  
  // Crear objetos Persona e interactuar con ellos
  const persona1 = new Persona("Juan", 25, "123456789");
  const persona2 = new Persona("María", 3, "987654321");
  
  persona1.caminar();
  persona1.mayorEdad();
  persona1.hablar("Hola, ¿cómo estás?");
  persona1.comer("una pizza");
  
  persona2.caminar();
  persona2.mayorEdad();
  persona2.hablar("¡Buenos días!");
  persona2.comer("una ensalada");
  