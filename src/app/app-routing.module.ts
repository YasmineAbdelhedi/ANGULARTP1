import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

const routes: Routes = [
  { path: 'fournisseur', component: FournisseurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
