import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // datos = "";


  // Reto

  titulo = 'Data Binding Interpolation';

    mostrar = true;
    valor = "Ocultar";
    texto = "";

    ver() {
    if (this.mostrar === true) {
    this.valor = "Mostrar"
    this.mostrar = false
    } else {
    this.valor = "Ocultar"
    this.mostrar = true
    }
}


// Asincrona

  datos1 = new Array;
  
  n = "";
  a = "";
  c = "";
 
  Agregar(){
    if(this.n!='' && this.a!='' && this.c!=''){
    this.datos1.push({'Nombre': this.n, 'Apellido': this.a, 'Carrera': this.c});
    this.n = "";
    this.a = "";
    this.c = "";
    }else{
    alert("Debe ingresar todos los datos");
    }
    }

  
    Eliminar(indice:number){
      let conf = confirm("¿Desea eliminar?")
      if(conf == true){
        this.datos1.splice(indice, 1);
      } else {
        return;
      }
      
      
    }

}
