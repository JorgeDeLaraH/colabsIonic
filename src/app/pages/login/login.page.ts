import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers:[AuthService]
})
export class LoginPage{
  person={
    email:"",
    password:""
  }
  constructor(public alertCtrl:AlertController,public authService:AuthService,public router:Router) { }
  login(){
    if(this.person.email=='' || this.person.password==""){
      this.nullAlert()
    }
    else{
      this.authService.authUser(this.person.email,this.person.password).subscribe((res)=>{
        console.log(res.Response)
        if (res.Response===false || res.Response===undefined){
          this.showAlert()
        }
        else{
          this.router.navigate(['principal'])
        }
      })
    }
    
  }
  //Alertas para control de la información
  alertButtons = ['Ok'];
  async showAlert(){
    const alert=await this.alertCtrl.create({
      header:'Aviso',
      subHeader:'Tus credenciales son incorrectas',
      buttons:['Ok']
    });
    await alert.present();
  }
  async nullAlert(){
    const alert=await this.alertCtrl.create({
      header:'Aviso',
      subHeader:'Llena los campos por favor',
      buttons:['Ok']
    });
    await alert.present();
  }

}
