import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentComponent } from './continent/continent.component';


const routes: Routes = [{
  path:'continents', component:ContinentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
