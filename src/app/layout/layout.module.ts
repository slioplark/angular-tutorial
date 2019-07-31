import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { MaterialModule } from './content/material/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
