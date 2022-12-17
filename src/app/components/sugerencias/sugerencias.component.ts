import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss']
})
export class SugerenciasComponent implements OnInit{

  personajes=[{
    id:1,
     nombre:"scoobydoobidoo",
     imagen: "../../../assets/scooby.jpg"
  },
  {
    id:2,
    nombre:"freddy",
    imagen: "../../../assets/fred.jpg"
  },
  {
    id:3,
    nombre:"daphneblake",
    imagen: "../../../assets/daphne.jpg"
  }]
  constructor(private servi:SocialService){
 
  
  }
  
  
  agregar(id:number,item:any){
    console.log(this.servi.newPersonajes);
    this.servi.newPersonajes.push(item)
    this.personajes= this.personajes.filter(e=>e.id!==id)

   localStorage.setItem("follow",JSON.stringify(this.servi.newPersonajes))
   localStorage.setItem("borrar",JSON.stringify(this.personajes))
   
  }

  lo(){
    console.log(this.personajes);
    console.log(this.servi.newPersonajes);
    
    
  }
  ngOnInit(): void {
    console.log(this.servi.newPersonajes);
    console.log(this.personajes);
 
  
  }
}
