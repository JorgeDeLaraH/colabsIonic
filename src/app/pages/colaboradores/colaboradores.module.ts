import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { ColaboradoresPageRoutingModule } from './colaboradores-routing.module';

import { ColaboradoresPage } from './colaboradores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaboradoresPageRoutingModule,
    HttpClientModule
  ],
  providers:[
    HttpClient
  ],
  declarations: [ColaboradoresPage]
})
export class ColaboradoresPageModule {}
