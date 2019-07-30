import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { DialogComponent } from './content/dialog/dialog.component';
import { OpenDialogComponent } from './content/dialog/open-dialog/open-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    DialogComponent,
    OpenDialogComponent,
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  imports: [
    SharedModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
