import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { OpenDialogComponent } from './dialog/open-dialog/open-dialog.component';

@NgModule({
  declarations: [
    DialogComponent,
    OpenDialogComponent,
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DialogComponent
  ]
})
export class MaterialModule { }
