// Clase base FiguraGeometrica
class FiguraGeometrica {
    constructor() {}
  
    area(): number {
      return 0;
    }
  }
  
  // Subclase Triángulo
  class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
      super();
    }
  
    area(): number {
      return (this.base * this.altura) / 2;
    }
  }
  
  // Subclase Círculo
  class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
      super();
    }
  
    area(): number {
      return Math.PI * this.radio * this.radio;
    }
  }
  
  // Subclase Cuadrado
  class Cuadrado extends FiguraGeometrica {
    constructor(private lado: number) {
      super();
    }
  
    area(): number {
      return this.lado * this.lado;
    }
  }
  
  // Crear objetos de cada figura
  const triangulo = new Triangulo(5, 4);
  const circulo = new Circulo(3);
  const cuadrado = new Cuadrado(6);
  
  // Calcular áreas
  const areaTriangulo = triangulo.area();
  const areaCirculo = circulo.area();
  const areaCuadrado = cuadrado.area();
  
  console.log(`Área del triángulo: ${areaTriangulo}`);
  console.log(`Área del círculo: ${areaCirculo}`);
  console.log(`Área del cuadrado: ${areaCuadrado}`);
  