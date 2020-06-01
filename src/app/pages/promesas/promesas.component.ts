import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 
    
    this.contarTres().then( () => {
      console.log('Termino!');
    }).catch( (e) => {  

    });
    
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    let promesa = new Promise<boolean>((resolve, reject) => {
       
      let contador = 0;

      let interval = setInterval(()=> {
        contador += 1;
        if( contador === 3){
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);

    });
    
    return promesa;
  }

}
