class CuentaBancaria {
    numeroCuenta: string;
    titular: string;
    saldo: number;
  
    constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
      this.numeroCuenta = numeroCuenta;
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(monto: number): void {
      if (monto > 0) {
        this.saldo += monto;
        console.log(`Se depositaron $${monto} en la cuenta de ${this.titular}. Saldo actual: $${this.saldo}`);
      } else {
        console.log("El monto del depósito debe ser mayor que cero.");
      }
    }
  
    retirar(monto: number): void {
      if (monto > 0 && monto <= this.saldo) {
        this.saldo -= monto;
        console.log(`Se retiraron $${monto} de la cuenta de ${this.titular}. Saldo actual: $${this.saldo}`);
      } else {
        console.log("Fondos insuficientes o monto inválido.");
      }
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  }
  
  // Crear varias cuentas y probar los métodos
  const cuenta1 = new CuentaBancaria("001", "Juan Pérez", 1000);
  const cuenta2 = new CuentaBancaria("002", "María López", 2000);
  
  console.log(`Saldo de ${cuenta1.titular}: $${cuenta1.consultarSaldo()}`);
  console.log(`Saldo de ${cuenta2.titular}: $${cuenta2.consultarSaldo()}`);
  
  cuenta1.depositar(500);
  cuenta2.retirar(300);
  
  console.log(`Saldo de ${cuenta1.titular} después del depósito: $${cuenta1.consultarSaldo()}`);
  console.log(`Saldo de ${cuenta2.titular} después del retiro: $${cuenta2.consultarSaldo()}`);
