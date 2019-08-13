import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { OpenDialogComponent } from './dialog/open-dialog/open-dialog.component';
import { FormComponent } from './form/form.component';
import { MaterialRoutingModule } from './material-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AutocompleteComponent,
    DatepickerComponent,
    DialogComponent,
    OpenDialogComponent,
    TableComponent,
    FormComponent
  ],
  entryComponents: [
    OpenDialogComponent
  ],
  imports: [
    SharedModule,
    MaterialRoutingModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zn-TW' }
  ],
})
export class MaterialModule { }
