import { NgModule } from '@angular/core';

import { MainModule } from '../main/main.module';
import { SharedModule } from '../shared/shared.module';
import { MenuItemComponent } from './common/menu-item/menu-item.component';
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
    MenuItemComponent
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
