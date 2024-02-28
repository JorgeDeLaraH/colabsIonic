import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-empty-form',
  templateUrl: './empty-form.page.html',
  styleUrls: ['./empty-form.page.scss'],
  providers:[ColaboradoresService]
})
export class EmptyFormPage implements OnInit {
  formData:any={}
  queryData:any={}
  id:any
  sentinela:any
  constructor(private service:ColaboradoresService, private router:Router, private alertCtrl:AlertController) { }

  async showAlert(){
    const alert=await this.alertCtrl.create({
      header:'Aviso',
      subHeader:'Por favor llena todos los campos',
      buttons:['Ok']
    });
    await alert.present();
  }
  async alertSuccess(){
    const alert=await this.alertCtrl.create({
      header:'Aviso',
      subHeader:'Se ha actualizado correctamente',
      buttons:['Ok']
    });
    await alert.present();
  }
  async nullSkills(){
    const alert=await this.alertCtrl.create({
      header:'Aviso',
      subHeader:'No hay registros de Skills para este usuario',
      buttons:['Ok']
    });
    await alert.present();
  }
  submitForm(){
    if(this.sentinela=="nuevo"){
      if(!("nombre" in this.formData && "apellidoPaterno" in this.formData && "apellidoMaterno" in this.formData && "correo" in this.formData && "telefono" in this.formData && "rol" in this.formData)){
        this.showAlert()
      }
      else{
        this.service.postColaborador(this.formData).subscribe((res)=>{
          console.log(res)
          this.alertSuccess()
          localStorage.clear()
        },(err)=>{
          console.log("No pude crear el usuario debido a:",err)
        })

      }
    }
    else{
      if(this.formData.nombre=='' || this.formData.apellidoPaterno=='' || this.formData.apellidoMaterno=='' || this.formData.correo=='' || this.formData.rol=='' || this.formData.telefono==null){
        this.showAlert()
      }
      else{
        this.service.putColaborador(this.formData).subscribe((res)=>{
          console.log(this.formData)
          this.alertSuccess()
          localStorage.clear()
        },(err)=>{
          console.log("No pude actualizar debido a: ",err)
        })
      }
     
    }
  }
  dropdownItems: any[] = [
    { label: 'Administrator', value: 'Administrator' },
    { label: 'DevOps', value: 'DevOps' },
    { label: 'Software Developer', value: 'Software Developer'},
    { label: 'Project Manager', value: 'Project Manager'}
  ];
  getSkills(){
    if(this.sentinela=="nuevo"){
      this.nullSkills()
    }
    else{
      if(this.queryData.arrSkills.length===0){
        this.nullSkills()
      }
      else{
        this.router.navigate(['skills'])
      }
      
    } 
  }
  back(){
      this.router.navigate(['colaboradores']).then(()=>{
        window.location.reload()
      })
    
  }
  ngOnInit() {
    this.sentinela=localStorage.getItem("new")
    if(this.sentinela=="nuevo"){
      console.log("Es un nuevo colaborador no dibujare nada")
    }
    else{
      this.id=localStorage.getItem("Id")
      this.service.getColaborador(this.id).subscribe((res)=>{
        this.queryData=res.Response[0]
        this.formData={
          "id":this.queryData._id,
          "nombre": this.queryData.strName.toString(),
          "apellidoPaterno":this.queryData.strFirstLast.toString(),
          "apellidoMaterno":this.queryData.strSecondLast.toString(),
          "rol":this.queryData.strRole.toString(),
          "correo":this.queryData.strEmail.toString(),
          "telefono":parseInt(this.queryData.intPhone),
          "arrSkills":[{}]
        }
        console.log(this.queryData,this.formData)
      },(err)=>{
        console.log("No pude cargar por: ",err)
      })
    }
    
    
  }

}
