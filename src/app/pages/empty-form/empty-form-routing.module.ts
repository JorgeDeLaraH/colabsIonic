import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyFormPage } from './empty-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyFormPageRoutingModule {}
