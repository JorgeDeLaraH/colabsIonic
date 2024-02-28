import { Component, OnInit } from '@angular/core';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
  providers:[ColaboradoresService]
})
export class SkillsPage implements OnInit {
  id:any
  sentinela:any
  queryData:any={}
  querySkills:any=[]
  constructor(public service:ColaboradoresService, public router:Router) { }
  backito(){
    this.router.navigate(['empty-form'])
  }
  ngOnInit() {
    this.sentinela=localStorage.getItem("new")
    if(this.sentinela=="nuevo"){
      console.log("Me quede quieto")
    }
    else{
      this.id=localStorage.getItem("Id")
      this.service.getColaborador(this.id).subscribe((res)=>{
        this.queryData=res.Response[0]
        this.querySkills=res.Response[0].arrSkills
        console.log(this.querySkills,this.queryData)
      })
    }
    
    
  }
}
