import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SocialService {
  newPersonajes:any[] =[]
  

  personajes:any=[{
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
  constructor() { 
  

    
  }
}
