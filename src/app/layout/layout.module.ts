import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    FooterComponent,
    SharedModule
  ]
})
export class LayoutModule { }
