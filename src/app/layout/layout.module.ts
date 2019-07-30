import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { MaterialModule } from './content/material/material.module';

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
    SidenavComponent,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
