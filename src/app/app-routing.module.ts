import { DetailsComponent } from './components/details/details.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'create', component:CreateFormComponent},
  {path: 'edit/:id', component: CreateFormComponent },
  {path:'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
