export class Evento {
  constructor (
    public id: string,
    public nombre: string,
    public fecha: string,
    public inversion?: number,
    public totalBoletos?: number
  ) { }
}
