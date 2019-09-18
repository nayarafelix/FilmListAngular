import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent, FilmeComponent } from './components/index'


const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'filme/:id', component: FilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
