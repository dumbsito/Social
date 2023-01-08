import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

search:string=""
bolean:boolean=true
dou(event:any){
event=event.target.value
this.search=event
console.log(this.search);
}
constructor(public servi:SocialService){
}

focus(){
 let input=document.getElementById("input")?.focus()
}
ngOnInit(): void {

  
  
}
}
