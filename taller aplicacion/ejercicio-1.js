/**1. Defina una clase Cita que tenga los atributos:
• paciente (nombre del paciente)
• doctor (nombre del doctor)
• fecha (fecha de la cita)
• hora (hora de la cita)
• motivo (motivo de la cita)
Cree una lista de citas inicializada con algunos ejemplos de citas.
Después cree las siguientes funciones (todo es simulado):
• agregar_cita(cita): agrega una nueva cita a la lista
• eliminar_cita(cita): elimina una cita de la lista
• buscar_cita(doctor): devuelve las citas de un doctor dado
• citas_hoy(): devuelve las citas de hoy
• citas_fecha(fecha): devuelve las citas de una fecha dada */


class Cita{
    constructor(paciente,doctor,fecha,hora,motivo){
        this.paciente = paciente;
        this.doctor = doctor;
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
    }

    mensaje(){
        return`El paciente ${this.paciente}, tiene cita medica con el doctor ${this.doctor} el dia ${this.fecha} a la hora ${this.hora} para ${this.motivo}`
    }

}

class agendaCita{

    constructor(){
        this.agendas = []
    }

    agregarCita(cita){
        this.agendas.push(cita);
    }

    eliminarCita(cita){
        this.cita = cita;

        if(cita === 'delete'){
            return `La cita se cancelo`
        }else{
            return 'aun hay citas'
        }
    }






}












