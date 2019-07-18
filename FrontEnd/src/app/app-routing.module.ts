import { MiojoComponent } from './miojo/miojo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'miojo', pathMatch: 'full'},
  {path:'miojo', component: MiojoComponent},
  {path:'**', redirectTo:'miojo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
