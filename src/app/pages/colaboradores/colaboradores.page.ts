import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
  providers:[ColaboradoresService]
})
export class ColaboradoresPage implements OnInit {
  //En esta guardamos la respuesta proveniente de flask
  query:any
  constructor(public service:ColaboradoresService,private router:Router) { }
  id:any
  //Traemos el id al cual se dio click
  captureId(id:any){
    this.id=id
    console.log(this.id)
    //Creamos un localstore para almacenar un sentinela y el i
    localStorage.setItem("new","data")
    localStorage.setItem("Id",this.id)
    this.router.navigate(['empty-form'])
  }

  ngOnInit() {
    this.service.getColaboradores().subscribe((res)=>{
      this.query=JSON.parse(JSON.stringify(res.Response))
    },(err)=>{
      console.log("Hubo un error trayendo la info",err)
    })
    localStorage.clear()
  }
  newColaborador(){
    localStorage.setItem("new","nuevo")
    this.router.navigate(['empty-form'])
  }
  removeUser(id:string){
    let data={
      "id":id
    }
    this.service.deleteColaborador(data).subscribe((res)=>{
      console.log(res)
      window.location.reload()
    },(err)=>{
      console.log("No se pudo borrar: ",err)
    })
  }
  back(){
    this.router.navigate(['principal'])
  }
}
