import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(public router:Router) { }
  back(){
    this.router.navigate(['login'])
  }
  colaboradores(){
    this.router.navigate(['colaboradores'])
  }
  ngOnInit() {
  }

}
