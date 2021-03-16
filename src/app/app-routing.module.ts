import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgeComponent } from './age/age.component';
import {HomeComponent} from './home/home.component';
import{TastComponent} from './tast/tast.component';


const routes: Routes = [
  {path:'age-calculator', component:AgeComponent},
  {path:'',component:HomeComponent},
  {path:'test',component:TastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
