import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
{path:'',component:ListeComponent},
{path:'add',component:AjoutComponent},
{path:'liste',component:ListeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
