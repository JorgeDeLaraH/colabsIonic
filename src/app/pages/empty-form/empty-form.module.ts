import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { EmptyFormPageRoutingModule } from './empty-form-routing.module';

import { EmptyFormPage } from './empty-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyFormPageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClient],
  declarations: [EmptyFormPage]
})
export class EmptyFormPageModule {}
