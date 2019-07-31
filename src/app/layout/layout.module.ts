import { NgModule } from '@angular/core';

import { MainModule } from '../main/main.module';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
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
    MainModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
