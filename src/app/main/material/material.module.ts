import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DialogComponent } from './dialog/dialog.component';
import { OpenDialogComponent } from './dialog/open-dialog/open-dialog.component';
import { MaterialRoutingModule } from './material-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    DialogComponent,
    OpenDialogComponent,
    TableComponent,
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  imports: [
    SharedModule,
    MaterialRoutingModule
  ]
})
export class MaterialModule { }
