import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentComponent } from './continent/continent.component';
import { ViewResultComponent } from './view-result/view-result.component';


const routes: Routes = [{
  path:'continents', component:ContinentComponent,
  
},{
  path:'result-view',component:ViewResultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
