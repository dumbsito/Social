import { Component } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {

constructor(public servi:SocialService){

}

}
