import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DialogComponent } from './dialog/dialog.component';
import { OpenDialogComponent } from './dialog/open-dialog/open-dialog.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    DialogComponent,
    OpenDialogComponent,
    TableComponent,
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class MaterialModule { }
