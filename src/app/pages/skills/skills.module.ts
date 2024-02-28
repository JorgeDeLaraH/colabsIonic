import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { SkillsPageRoutingModule } from './skills-routing.module';

import { SkillsPage } from './skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsPageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClient],
  declarations: [SkillsPage]
})
export class SkillsPageModule {}
