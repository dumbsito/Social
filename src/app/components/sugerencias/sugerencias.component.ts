import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss']
})
export class SugerenciasComponent implements OnInit{

  
  constructor(public servi:SocialService){
 
  
  }
  
  
  agregar(id:number,item:any){
   
    this.servi.newPersonajes.push(item)
    this.servi.personajes= this.servi.personajes.filter((e:any)=>e.id!==id)

   
   
  }
 
  
  
  ngOnInit(): void {

 
  
  }
}
