class Cajero {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  
    realizarRetiro(monto: number): string {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        return `Retiro exitoso. Saldo restante: $${this.saldo}`;
      } else {
        return "Fondos insuficientes o monto inválido.";
      }
    }
  }
  
  const cajeroAutomatico = new Cajero(1000); // Inicializa el cajero con un saldo de $1000
  
  console.log("Saldo actual: $" + cajeroAutomatico.consultarSaldo());
  
  const montoRetiro = 200;
  console.log(cajeroAutomatico.realizarRetiro(montoRetiro));
  
  console.log("Saldo actual: $" + cajeroAutomatico.consultarSaldo());