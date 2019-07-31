import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
