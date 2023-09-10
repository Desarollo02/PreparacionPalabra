export class Lectura {
    libro: string;
    capitulo: number;
    versiculo!: number;
    versiculo2!: number;
  
    constructor(l: string, c: number, v?: number, v2?: number) {
      this.libro = l;
      this.capitulo = c;
      if (v !== undefined) {
        this.versiculo = v;
      }
      if (v2 !== undefined) {
        this.versiculo2 = v2;
      }
    }
  
    returnVers(): number {
      return this.versiculo;
    }
  
    returnVers2(): number {
      return this.versiculo2;
    }
  
    toString(): string {
      if (this.versiculo2 !== undefined && this.versiculo !== undefined) {
        return `${this.libro} ${this.capitulo}, ${this.versiculo} - ${this.versiculo2}`;
      } else if (this.versiculo2 === undefined && this.versiculo !== undefined) {
        return `${this.libro} ${this.capitulo}, ${this.versiculo}`;
      } else {
        return `${this.libro} ${this.capitulo}`;
      }
    }
  }
  