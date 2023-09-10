import { Component } from '@angular/core';
import { Lectura } from '../models/lectura'; // Ajusta la ruta según tu estructura de carpetas
import {TreeNode} from '../models/treeNode';
import {BinarySearchTree} from '../models/binarySearchTree';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  libro: string = 'Libro'; // Valor predeterminado para el selector
  nuevoElemento: string = '';
  listaElementos: string[] = [];
  arbolLecturas = new BinarySearchTree();
  lectura!: Lectura;

  // Variable para las opciones del dropdown
  libros: string[] = ['1 Co','1 Cro','1 Jn','1 Mac','1 P','1 R','1 S',
    '1 Ti','1 Ts','2 Co','2 Cro','2 Jn','2 Mac','2 P','2 R','2 S','2 Ti',
    '2 Ts','3 Jn','Abd','Am','Ap','Bar','Cnt','Col','Dn','Dt','Ec','Eclo',
    'Ef','Esd','Est','Ex','Ez','Flm','Flp','Gl','Gn','Hab','Hag','Hch','Heb',
    'Is','Jdt','Jer','Jl','Jn','Job','Jon','Jos','Jud','Jue','Lc','Lm','Lv',
    'Mal','Mc','Miq','Mt','Nah','Neh','Nm','Os','Pr','Ro','Rt','Sab','Sal',
    'Sof','Stg','Tb','Tit','Zac'
  ];

  agregarElemento() {
    if (this.nuevoElemento.trim() !== '') {
      
      let base = this.nuevoElemento

      let capitulo = base.split(",")[0]
      let versiculos = base.split(",")[1]
      let extra = versiculos.split(".")[1]
      versiculos = versiculos.split(":")[0]


      //this.lectura = new Lectura(this.libro, 1);
      //this.arbolLecturas.insert(this.lectura);

      //this.actualizarLista();

      this.listaElementos.push(capitulo)

      // Limpiamos los campos de entrada
      this.nuevoElemento = '';
      this.libro = 'Libro';
    }
  }

  actualizarLista() {
    this.listaElementos = this.arbolLecturas.inorderTraversal(this.arbolLecturas.root);
  }
}
