import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DialogComponent } from './dialog/dialog.component';
import { TableComponent } from './table/table.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'table', component: TableComponent },
  { path: 'datepicker', component: DatepickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
