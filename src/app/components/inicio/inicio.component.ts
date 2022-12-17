import { Component, OnInit } from '@angular/core';

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


focus(){
 let input=document.getElementById("input")?.focus()
}
ngOnInit(): void {

  
  
}
}
