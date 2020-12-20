import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ContinentComponent } from './continent/continent.component';


@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
