import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestGetComponent } from './test-get/test-get.component';

const routes: Routes = [
  { path: 'get-categories', component: TestGetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
