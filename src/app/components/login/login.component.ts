import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(private router:Router){

}

email:string=""
pass:string=""

  login(){
    if(this.email.length<5){
      return
    }else{
       this.router.navigate(["/inicio"])
  }
}
}
