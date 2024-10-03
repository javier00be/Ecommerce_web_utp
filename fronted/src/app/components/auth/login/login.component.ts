
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string="";
  password:string="";

  constructor(
    public authService: AuthService,
    public router: Router,
  ){}
  ngOnInit(): void {
    //console.log(this.authService.user);
    if (this.authService.user) {
      this.router.navigate(["/"]);
    }
  }

  login(){

    if(!this.email){
      alert("ES NECESARIO INGRESAR EL EMAIL");
    }
    if(!this.password){
      alert("ES NECESARIO INGRESAR UNA CONTRASEÑA");
    }
    this.authService.login(this.email,this.password).subscribe((resp:any)=>{
      console.log(resp);
      if (!resp.error && resp) {
        //EL USUARIO INGRESO CON EXITO
        this.router.navigate(["/"]);
      }else{
        alert(resp.error.menssage);
      }
    })
  }
}
